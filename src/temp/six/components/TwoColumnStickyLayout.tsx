import React from "react";

interface SlotProps {
  children: React.ReactNode;
}

interface TwoColumnStickyLayoutProps {
  children: React.ReactNode;
  leftWidth?: string;
  rightWidth?: string;
  stickyOffset?: string;
}

export default function TwoColumnStickyLayout({
  children,
  leftWidth = "w-1/3",
  rightWidth = "w-2/3",
  stickyOffset = "top-0",
}: TwoColumnStickyLayoutProps) {
  const childArray = React.Children.toArray(children) as React.ReactElement[];

  const leftSlot = childArray.find(
    (child) => child.type === TwoColumnStickyLayout.Left
  ) as React.ReactElement<SlotProps> | undefined;

  const rightSlot = childArray.find(
    (child) => child.type === TwoColumnStickyLayout.Right
  ) as React.ReactElement<SlotProps> | undefined;

  return (
    <div className="flex gap-4 p-4">
      {/* LEFT COLUMN */}
      <div className={leftWidth}>
        <div className={`sticky ${stickyOffset} bg-white z-10`}>
          {leftSlot?.props.children}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className={`${rightWidth} space-y-4`}>
        {rightSlot?.props.children}
      </div>
    </div>
  );
}

/* Named Slots (Correctly Typed) */
TwoColumnStickyLayout.Left = function Left({ children }: SlotProps) {
  return <>{children}</>;
};

TwoColumnStickyLayout.Right = function Right({ children }: SlotProps) {
  return <>{children}</>;
};
