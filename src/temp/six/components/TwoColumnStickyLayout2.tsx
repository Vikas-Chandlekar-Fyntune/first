import React from "react";
import "./TwoColumnStickyLayout2.css";

interface SlotProps {
  children: React.ReactNode;
}

interface LayoutProps {
  children: React.ReactNode;
  leftWidth?: string; // e.g., "33%", "25%", "40%"
  rightWidth?: string; // e.g., "67%", "75%", "60%"
  stickyOffset?: number; // e.g., 0, 80 (px)
}

export default function TwoColumnStickyLayout2({
  children,
  leftWidth = "33%",
  rightWidth = "67%",
  stickyOffset = 0,
}: LayoutProps) {
  const childArray = React.Children.toArray(children) as React.ReactElement[];

  const leftSlot = childArray.find(
    (child) => child.type === TwoColumnStickyLayout2.Left
  ) as React.ReactElement<SlotProps> | undefined;

  const rightSlot = childArray.find(
    (child) => child.type === TwoColumnStickyLayout2.Right
  ) as React.ReactElement<SlotProps> | undefined;

  return (
    <div className="layout-container">
      <div className="layout-left" style={{ width: leftWidth }}>
        <div
          className="layout-left-sticky"
          style={{ top: `${stickyOffset}px` }}
        >
          {leftSlot?.props.children}
        </div>
      </div>

      <div className="layout-right" style={{ width: rightWidth }}>
        {rightSlot?.props.children}
      </div>
    </div>
  );
}

/* Named Slots */
TwoColumnStickyLayout2.Left = ({ children }: SlotProps) => <>{children}</>;
TwoColumnStickyLayout2.Right = ({ children }: SlotProps) => <>{children}</>;
