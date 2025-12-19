// pdf_generator.ts
import { Token, TokenType } from "../types/Tokens";
import { jsPDF } from "jspdf";

export function generatePDF(tokens: Token[], filename: string) {
  const doc = new jsPDF();

  const GOLD: [number, number, number] = [218, 165, 32];
  const GRAY: [number, number, number] = [235, 235, 235];
  const TEXT: [number, number, number] = [30, 30, 30];

  const startX = 14;
  let startY = 18;

  const colWidths = [25, 75, 75];
  const cellHeight = 9;
  const padding = 6;

  const baseTableWidth = colWidths.reduce((a, b) => a + b, 0);
  const innerX = startX + padding;
  const innerWidth = baseTableWidth - padding * 2;
  const scale = innerWidth / baseTableWidth;
  const innerColWidths = colWidths.map(w => w * scale);

  const rows =
    tokens.length > 0
      ? tokens
      : Array.from({ length: 8 }, (_, i) => ({
          line: i + 1,
          lexeme: "",
          type: TokenType.Identifier
        }));

  
     //OUTER FRAME 
  
  const outerHeight =
    18 +                   
    6 +                      
    cellHeight * (rows.length + 1) + 8;

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.6);
  doc.roundedRect(startX, startY, baseTableWidth, outerHeight, 4, 4);

  
     // TITLE ROW
  
  doc.setFont("times", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...TEXT);
  doc.text(
    "Lexical Tokens (The Elements)",
    startX + padding,
    startY + 13
  );

  startY += 18;

  // GOLD DIVIDER LINE 
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.4);
  doc.line(
    startX + 2,
    startY,
    startX + baseTableWidth - 2,
    startY
  );

  startY += 6;

  // INNER TABLE HEADER 
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setLineWidth(0.2);
  doc.setDrawColor(180, 180, 180);

  const headers = ["LINE", "LEXEME", "TOKEN TYPE"];
  let x = innerX;

  headers.forEach((h, i) => {
    doc.setFillColor(...GRAY);
    doc.rect(x, startY, innerColWidths[i], cellHeight, "FD");
    doc.text(
      h,
      x + innerColWidths[i] / 2,
      startY + 6,
      { align: "center" }
    );
    x += innerColWidths[i];
  });

  startY += cellHeight;

  
    // DATA ROWS
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  rows.forEach((t) => {
    let colX = innerX;

    const values = [
      t.line.toString(),
      t.lexeme,
      TokenType[t.type]
    ];

    values.forEach((val, i) => {
      doc.rect(colX, startY, innerColWidths[i], cellHeight);
      doc.text(val ?? "", colX + 4, startY + 6);
      colX += innerColWidths[i];
    });

    startY += cellHeight;
  });

  doc.save(filename);
}