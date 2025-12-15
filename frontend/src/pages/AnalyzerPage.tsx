import { ManuscriptEditor } from "../features/lexical/ManuscriptEditor";
import { TokenTable } from "../features/lexical/TokenTable";

const AnalyzerPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full min-h-[600px]">
      {/* LEFT COLUMN: Editor + Analyze Button */}
      <section className="flex-1 flex flex-col gap-4">
        {/* The Editor Panel takes up remaining space */}
        <div className="grow">
          <ManuscriptEditor />
        </div>

        {/* The Big Brown Button */}
        <button className="btn-primary w-full shadow-lg">
          Analyze Narrative Structure
        </button>
      </section>

      {/* RIGHT COLUMN: Table */}
      <section className="flex-1 h-full min-w-0 overflow-auto">
        <TokenTable />
      </section>
    </div>
  );
};

export default AnalyzerPage;
