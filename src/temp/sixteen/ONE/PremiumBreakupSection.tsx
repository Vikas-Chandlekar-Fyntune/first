import { FiCheck, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  SectionTr, SectionTd,
  DataTr, LabelTd, LabelInner, ValueTd,
  CheckIcon, CrossIcon,
} from "./styles";

/**
 * PremiumBreakupSection
 * Renders the "Premium Breakup" collapsible section.
 *
 * Each row carries its own columnValues[] — plain text strings.
 * No coupling to plans[] shape or keys.
 *
 * Props:
 *   rows      – premiumBreakupRows[]  — section-specific data
 *               Each row: { key, label, icon, bold, columnValues: string[] }
 *   colCount  – number of plan columns
 *   isOpen    – bool
 *   onToggle  – fn()
 */
export default function PremiumBreakupSection({ rows, colCount, isOpen, onToggle }) {
  return (
    <>
      {/* Section header row */}
      <SectionTr onClick={onToggle}>
        <SectionTd>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {isOpen ? <FiChevronUp size={13} /> : <FiChevronDown size={13} />}
            Premium Breakup
          </div>
        </SectionTd>

        {Array.from({ length: colCount }).map((_, i) => (
          <SectionTd key={i} />
        ))}
      </SectionTr>

      {/* Data rows — each row owns its values */}
      {isOpen && rows.map((row) => (
        <DataTr key={row.key}>
          <LabelTd $bold={row.bold}>
            <LabelInner>
              {row.icon}
              {row.label}
            </LabelInner>
          </LabelTd>

          {/* columnValues[index] — independent of plans shape */}
          {row.columnValues.map((value, colIndex) => (
            <ValueTd key={colIndex} $bold={row.bold}>
              {value}
            </ValueTd>
          ))}
        </DataTr>
      ))}
    </>
  );
}
