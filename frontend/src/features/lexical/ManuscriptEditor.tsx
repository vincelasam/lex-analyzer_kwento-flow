import React, { useState, useRef } from "react";
import { Panel } from "../../components/ui/Panel";

export const ManuscriptEditor = () => {
  const [code, setCode] = useState(`scene ChapterOne {
  rem hero_hp = 108;
  character Jeff perceives Inventory {
      masking secret_key;
  }
  transition thru Jeff to ChapterTwo when hero_hp > 56;
  end scene;
}`);

  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const lineCount = code.split("\n").length;

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };
  return (
    <Panel
      title="Manuscript Source (Code)"
      action={
        <button className="flex items-center gap-2 px-3 py-1 text-sm font-bold border border-(--kwento-gold) rounded hover:bg-parchment transition-colors">
          <span className="bg-black text-white px-1 text-xs">↑</span>
          Upload Manuscript
        </button>
      }
    >
      <div className="flex h-full font-mono text-sm bg-(--kwento-bg)">
        {/* Line Numbers */}
        {/* <div className="w-10 flex flex-col items-center pt-4 text-gray-400 bg-(--kwento-side) select-none border-r border-gray-100"> */}
        {/* LINE NUMBERS COLUMN */}
        <div
          ref={lineNumbersRef}
          className="w-10 flex flex-col items-center pt-4 text-gray-400 bg-(--kwento-side) select-none border-r border-gray-100 overflow-hidden"
          style={{ lineHeight: "1.5rem" }} // Explicit line-height to match textarea
        >
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* The Text Area */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onScroll={handleScroll} // <--- Triggers the sync
          className="grow resize-none p-4 outline-none text-ink bg-(--kwento-paper) whitespace-pre overflow-auto leading-6"
          placeholder="Start typing your KwentoFlow code..."
          spellCheck={false}
        />
      </div>
    </Panel>
  );
};
