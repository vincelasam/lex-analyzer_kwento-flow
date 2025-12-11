import type { ReactNode } from "react";
interface PanelProps {
  title: string;
  children: ReactNode;
  action?: ReactNode; // For the "Upload Manuscript" button
}

export const Panel = ({ title, children, action }: PanelProps) => {
  return (
    <div className="border-2 border-gold rounded-lg bg-paper p-1 flex flex-col h-full shadow-sm">
      <div className="border border-gold/30 rounded flex flex-col h-full relative">
        {/* Panel Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gold/20 mb-2">
          <h2 className="font-serif text-2xl font-bold text-ink">{title}</h2>
          {action && <div>{action}</div>}
        </div>

        {/* Panel Content */}
        <div className="grow overflow-hidden px-2 pb-2">{children}</div>
      </div>
    </div>
  );
};
