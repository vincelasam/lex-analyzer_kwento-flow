import { Panel } from "../../components/ui/Panel";

export interface Token {
  id: number;
  line: number;
  lexeme: string;
  type: string;
  desc: string;
}

interface TokenTableProps {
  tokens: Token[];
}

export const TokenTable = ({ tokens }: TokenTableProps) => {
  return (
    <Panel title="Lexical Tokens (The Elements)">
      <div className="h-full w-full overflow-auto min-w-0">
        <table className="w-max min-w-full text-left text-sm font-sans border-collapse">
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
            {tokens.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-6 text-center text-gray-400"
                >
                  No tokens yet. Click “Analyze Narrative Structure”.
                </td>
              </tr>
            ) : (
              tokens.map((token) => (
                <tr
                  key={token.id}
                  className="hover:bg-parchment/30 transition-colors"
                >
                  <td className="px-4 py-2 text-gray-500">{token.line}</td>
                  <td className="px-4 py-2 font-mono text-ink">
                    {token.lexeme}
                  </td>
                  <td className="px-4 py-2 text-xs font-bold text-gray-600">
                    {token.type}
                  </td>
                  <td className="px-4 py-2 text-gray-500 truncate max-w-[150px]">
                    {token.desc}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Panel>
  );
};
