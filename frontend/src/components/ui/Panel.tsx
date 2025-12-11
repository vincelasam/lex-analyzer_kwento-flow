import type { ReactNode } from "react";
interface PanelProps {
  title: string;
  children: ReactNode;
  action?: ReactNode; // For the "Upload Manuscript" button
}

export const Panel = ({ title, children, action }: PanelProps) => {
  return (
    <div className="p-1 flex flex-col h-full">
      <div className="border border-(--kwento-gold) rounded flex flex-col h-full relative bg-(--kwento-paper)">
        {/* Panel Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-(--kwento-gold)">
          <h2 className="font-serif text-2xl font-bold text-(--kwento-ink)">
            {title}
          </h2>
          {action && <div>{action}</div>}
        </div>

        {/* Panel Content */}
        <div className="grow overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
