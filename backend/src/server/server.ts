import express from "express";
import cors from "cors";
import { Lexer } from "../lexer/kf_lexer"; 
import { CharStream } from "../utils/charStream";
import { TokenType } from "../types/Tokens";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ success: false, message: "No code provided" });

  const lexer = new Lexer(new CharStream(code));
  const tokens = lexer.tokenize();

  const tokensForFrontend = tokens.map((t, idx) => ({
    id: idx + 1,
    line: t.line,
    lexeme: t.lexeme,
    type: TokenType[t.type], // enum to string
    desc: "", // later you can add descriptions
  }));

  res.json({ success: true, tokens: tokensForFrontend });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
