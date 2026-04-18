import { FiCheck, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  SectionTr, SectionTd,
  DataTr, LabelTd, LabelInner, ValueTd,
  CheckIcon, CrossIcon,
} from "./styles";

/**
 * AddonDetailsSection
 * Renders the "Addon Details" collapsible section.
 *
 * Each row carries its own columnValues[] — booleans (true = available).
 * No coupling to plans[] shape or addon keys.
 *
 * Props:
 *   rows      – addonDetailRows[]  — section-specific data
 *               Each row: { key, label, icon, bold, columnValues: boolean[] }
 *   colCount  – number of plan columns
 *   isOpen    – bool
 *   onToggle  – fn()
 */
export default function AddonDetailsSection({ rows, colCount, isOpen, onToggle }) {
  return (
    <>
      {/* Section header row */}
      <SectionTr onClick={onToggle}>
        <SectionTd>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {isOpen ? <FiChevronUp size={13} /> : <FiChevronDown size={13} />}
            Addon Details
          </div>
        </SectionTd>

        {Array.from({ length: colCount }).map((_, i) => (
          <SectionTd key={i} />
        ))}
      </SectionTr>

      {/* Data rows — each row owns its boolean availability values */}
      {isOpen && rows.map((row) => (
        <DataTr key={row.key}>
          <LabelTd $bold={row.bold}>
            <LabelInner>
              {row.icon}
              {row.label}
            </LabelInner>
          </LabelTd>

          {/* columnValues[index] — independent of plans shape */}
          {row.columnValues.map((available, colIndex) => (
            <ValueTd key={colIndex} $bold={row.bold}>
              {available
                ? <CheckIcon><FiCheck size={12} /></CheckIcon>
                : <CrossIcon><FiX size={12} /></CrossIcon>
              }
            </ValueTd>
          ))}
        </DataTr>
      ))}
    </>
  );
}
