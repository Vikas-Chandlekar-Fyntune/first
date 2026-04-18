import { FiCheck, FiStar, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  SectionTr, SectionTd,
  LabelInner,
  USPTd, USPList, USPItem,
} from "./styles";

/**
 * InsurerUSPSection
 * Renders the "Insurer USP" collapsible section.
 *
 * Its data (uspData) is completely independent — each entry has a planId
 * and its own highlights array. No coupling to the plans[] shape.
 *
 * Props:
 *   uspData   – [{ planId, highlights[] }]   — section-specific data
 *   colCount  – number of plan columns (for empty filler td)
 *   isOpen    – bool
 *   onToggle  – fn()
 */
export default function InsurerUSPSection({ uspData, colCount, isOpen, onToggle }) {
  return (
    <>
      {/* Section header row */}
      <SectionTr onClick={onToggle}>
        <SectionTd>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {isOpen ? <FiChevronUp size={13} /> : <FiChevronDown size={13} />}
            Insurer USP
          </div>
        </SectionTd>

        {/* filler cells — one per column, no data needed */}
        {Array.from({ length: colCount }).map((_, i) => (
          <SectionTd key={i} />
        ))}
      </SectionTr>

      {/* Highlights row — one cell per uspData entry */}
      {isOpen && (
        <tr>
          {/* Label cell */}
          <USPTd>
            <LabelInner style={{ color: "#888", fontSize: 13 }}>
              <FiStar size={14} style={{ color: "#AAB4CF" }} />
              Highlights
            </LabelInner>
          </USPTd>

          {/* Each column's highlights come from its own uspData entry */}
          {uspData.map((entry) => (
            <USPTd key={entry.planId}>
              <USPList>
                {entry.highlights.map((text) => (
                  <USPItem key={text}>
                    <FiCheck size={12} />
                    {text}
                  </USPItem>
                ))}
              </USPList>
            </USPTd>
          ))}
        </tr>
      )}
    </>
  );
}
