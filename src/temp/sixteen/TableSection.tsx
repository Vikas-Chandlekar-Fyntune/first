import { FiCheck, FiX, FiStar, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  SectionTr, SectionTd,
  DataTr, LabelTd, LabelInner, ValueTd,
  CheckIcon, CrossIcon,
  USPTr, USPTd, USPList, USPItem,
} from "./styles";

/**
 * TableSection
 * Renders a collapsible section inside the comparison table <tbody>.
 *
 * Props:
 *   section   – string  — section name, e.g. "Premium Breakup"
 *   rows      – array   — row config objects belonging to this section
 *   plans     – array   — all plan objects (columns)
 *   isOpen    – bool    — whether the section is expanded
 *   onToggle  – fn()    — called when the user clicks the section header
 *   isUSP     – bool    — special rendering for "Insurer USP" section
 */
export default function TableSection({ section, rows, plans, isOpen, onToggle, isUSP }) {
  return (
    <>
      {/* ── Section header row ─────────────────────────────── */}
      <SectionTr>
        <SectionTd style={{ cursor: "pointer" }} onClick={onToggle}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {isOpen ? <FiChevronUp size={13} /> : <FiChevronDown size={13} />}
            {section}
          </div>
        </SectionTd>

        {plans.map(p => (
          <SectionTd
            key={p.id}
            style={{ cursor: "pointer" }}
            onClick={onToggle}
          />
        ))}
      </SectionTr>

      {/* ── Body rows (only when open) ─────────────────────── */}
      {isOpen && (
        <>
          {/* USP section — one merged highlights row */}
          {isUSP && (
            <USPTr>
              <USPTd>
                <LabelInner style={{ color: "#888", fontSize: 13 }}>
                  <FiStar size={14} style={{ color: "#AAB4CF" }} />
                  Highlights
                </LabelInner>
              </USPTd>

              {plans.map(plan => (
                <USPTd key={plan.id}>
                  <USPList>
                    {plan.usps.map(usp => (
                      <USPItem key={usp}>
                        <FiCheck size={12} />
                        {usp}
                      </USPItem>
                    ))}
                  </USPList>
                </USPTd>
              ))}
            </USPTr>
          )}

          {/* Standard data rows */}
          {rows.map(row => (
            <DataTr key={row.key}>
              <LabelTd $bold={row.bold}>
                <LabelInner>
                  {row.icon}
                  {row.label}
                </LabelInner>
              </LabelTd>

              {plans.map(plan => {
                const val = row.isAddon
                  ? plan.addons[row.key]
                  : plan.premium[row.key];

                return (
                  <ValueTd key={plan.id} $bold={row.bold}>
                    {row.isAddon ? (
                      val
                        ? <CheckIcon><FiCheck size={12} /></CheckIcon>
                        : <CrossIcon><FiX size={12} /></CrossIcon>
                    ) : (
                      val
                    )}
                  </ValueTd>
                );
              })}
            </DataTr>
          ))}
        </>
      )}
    </>
  );
}
