import { Panel } from "../../components/ui/Panel";

export const ManuscriptEditor = () => {
  return (
    <Panel
      title="Manuscript Source (Code)"
      action={
        <button className="flex items-center gap-2 px-3 py-1 text-sm font-bold border border-gold rounded hover:bg-parchment transition-colors">
          {/* Simple Upload Icon */}
          <span className="bg-black text-white px-1 text-xs">↑</span>
          Upload Manuscript
        </button>
      }
    >
      <div className="flex h-full font-mono text-sm bg-paper">
        {/* Line Numbers (Visual Only) */}
        <div className="w-10 flex flex-col items-center pt-4 text-gray-400 bg-gray-50/50 select-none border-r border-gray-100">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* The Text Area */}
        <textarea
          className="grow resize-none p-4 leading-6 outline-none text-ink bg-transparent"
          placeholder="scene ChapterOne { ... }"
          spellCheck={false}
          defaultValue={`scene ChapterOne {
  rem hero_hp = 108;
  character Jeff perceives Inventory {
      masking secret_key;
  }
  transition thru Jeff to ChapterTwo when hero_hp > 56;
  end scene;
}`}
        />
      </div>
    </Panel>
  );
};
