import { Panel } from "../../components/ui/Panel";

export const TokenTable = () => {
  // Placeholder data
  const tokens = [
    {
      id: 1,
      line: 1,
      lexeme: "scene",
      type: "KEYWORD_SCENE",
      desc: "Marks the start...",
    },
    {
      id: 2,
      line: 1,
      lexeme: "ChapterOne",
      type: "IDENTIFIER",
      desc: "User defined name...",
    },
    {
      id: 3,
      line: 1,
      lexeme: "{",
      type: "DELIMETER_LBRACE",
      desc: "Opens a block...",
    },
    {
      id: 4,
      line: 2,
      lexeme: "rem",
      type: "KEYWORD_REM",
      desc: "Declares a narrative...",
    },
    {
      id: 5,
      line: 2,
      lexeme: "hero_hp",
      type: "IDENTIFIER",
      desc: "User-defined name...",
    },
    {
      id: 6,
      line: 2,
      lexeme: "=",
      type: "OPERATOR_ASSIGN",
      desc: "Assigns value to...",
    },
    {
      id: 7,
      line: 2,
      lexeme: "108",
      type: "LITERAL_INT",
      desc: "Integer value..",
    },
  ];

  return (
    <Panel title="Lexical Tokens (The Elements)">
      <div className="h-full overflow-auto">
        <table className="w-full text-left text-sm font-sans border-collapse">
          <thead className="bg-gray-100 text-xs font-bold text-gray-600 uppercase tracking-wider sticky top-0">
            <tr>
              <th className="px-4 py-3 border-b border-gray-200">Line</th>
              <th className="px-4 py-3 border-b border-gray-200">Lexeme</th>
              <th className="px-4 py-3 border-b border-gray-200">Token Type</th>
              <th className="px-4 py-3 border-b border-gray-200">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tokens.map((token) => (
              <tr
                key={token.id}
                className="hover:bg-parchment/30 transition-colors"
              >
                <td className="px-4 py-2 text-gray-500">{token.line}</td>
                <td className="px-4 py-2 font-mono text-ink">{token.lexeme}</td>
                <td className="px-4 py-2 text-xs font-bold text-gray-600">
                  {token.type}
                </td>
                <td className="px-4 py-2 text-gray-500 truncate max-w-[150px]">
                  {token.desc}
                </td>
              </tr>
            ))}
            {/* Empty rows to fill space if needed */}
            {Array.from({ length: 5 }).map((_, i) => (
              <tr key={`empty-${i}`} className="h-10">
                <td colSpan={4}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
};
