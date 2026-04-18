/**
 * InsuranceComparisonFull.jsx
 * Single-file version — all data, styles, and components inlined.
 * Dependencies: react, styled-components, react-icons
 */

import { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import {
  FiShield,
  FiStar,
  FiPhone,
  FiTruck,
  FiAlertCircle,
  FiInfo,
  FiCheck,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

// import {
//   vehicle,
//   plans,
//   uspData,
//   premiumBreakupRows,
//   addonDetailRows,
// } from "./data";

import {
  vehicle,
  plans,
  uspData,
  premiumBreakupRows,
  addonDetailRows,
} from "../ONE/data1";
// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: #F4F6FA; color: #1A1D2E; }
  html { scroll-behavior: smooth; }
`;

const fadeIn = keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 32px auto;
  padding: 0 16px 48px;
  animation: ${fadeIn} 0.5s ease both;
`;

const TableContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
`;

const ScrollOuter = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  max-height: 80vh;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  border-radius: 16px;
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  min-width: 720px;
`;

// Thead — hidden on mobile
const Thead = styled.thead`
  @media (max-width: 991px) {
    display: none;
  }
`;

const Tbody = styled.tbody``;

// Vehicle card — hidden on mobile
const VehicleCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

  @media (max-width: 991px) {
    display: none;
  }
`;

const VehiclePill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  span:first-child {
    font-size: 11px;
    color: #888;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  span:last-child {
    font-size: 14px;
    color: #1a1d2e;
    font-weight: 600;
  }
`;

// Th — plan cols sticky at top; label col sticky at top+left (highest z-index)
const Th = styled.th`
  padding: 0;
  background: #fff;
  vertical-align: top;
  min-width: 190px;
  position: sticky;
  top: 0;
  z-index: 15;

  &:first-child {
    min-width: 200px;
    width: 200px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 25;
    background: #fff;
    box-shadow: 4px 0 12px -4px rgba(0, 0, 0, 0.1);
    @media (min-width: 992px) {
      box-shadow: none;
    }
  }
`;

const FirstColHeader = styled.div`
  padding: 20px 16px;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  height: 100%;
  display: flex;
  align-items: flex-end;
  background: #fafbfe;
  border-bottom: 1px solid #eaecf5;
`;

const InsurerCard = styled.div`
  padding: 20px 16px 16px;
  background: ${(p) => p.$accentLight || "#fafafa"};
  border-bottom: 3px solid ${(p) => p.$color || "#ddd"};
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`;

const InsurerTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoCircle = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${(p) => p.$color}18;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;

const InsurerName = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #1a1d2e;
  line-height: 1.3;
`;

const InsurerSub = styled.div`
  font-size: 11px;
  color: #888;
`;

const Badge = styled.span`
  display: inline-block;
  background: ${(p) => p.$color};
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
  letter-spacing: 0.3px;
  width: fit-content;
`;

const IDVRow = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #555;
  span {
    font-weight: 700;
    color: #1a1d2e;
  }
`;

const SelectBtn = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 9px 0;
  background: ${(p) => p.$color};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition:
    opacity 0.15s,
    transform 0.1s;
  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const SectionTr = styled.tr`
  background: #f4f6fa;
  cursor: pointer;
  user-select: none;
`;

const SectionTd = styled.td`
  padding: 8px 16px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #8892b0;
  border-bottom: 1px solid #eaecf5;

  &:first-child {
    position: sticky;
    left: 0;
    z-index: 5;
    background: #f4f6fa;
    box-shadow: 4px 0 12px -4px rgba(0, 0, 0, 0.08);
    @media (min-width: 992px) {
      box-shadow: none;
    }
  }
`;

const DataTr = styled.tr`
  transition: background 0.15s;
  &:hover {
    background: #f8f9fd;
  }
`;

const LabelTd = styled.td`
  padding: 13px 16px;
  font-size: 13px;
  font-weight: ${(p) => (p.$bold ? "700" : "400")};
  border-bottom: 1px solid #eaecf5;
  white-space: nowrap;
  vertical-align: middle;
  position: sticky;
  left: 0;
  z-index: 5;
  background: ${(p) => (p.$bold ? "#FAFBFE" : "#fff")};
  box-shadow: 4px 0 12px -4px rgba(0, 0, 0, 0.08);
  @media (min-width: 992px) {
    box-shadow: none;
  }
`;

const LabelInner = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #555;
  svg {
    color: #aab4cf;
    flex-shrink: 0;
  }
`;

const ValueTd = styled.td`
  padding: 13px 20px;
  font-size: 13px;
  text-align: center;
  font-weight: ${(p) => (p.$bold ? "700" : "400")};
  color: ${(p) => (p.$bold ? "#1A1D2E" : "#555")};
  border-bottom: 1px solid #eaecf5;
  vertical-align: middle;
  background: ${(p) => (p.$bold ? "#FAFBFE" : "transparent")};
  min-width: 190px;
  transition: background 0.15s;
`;

const CheckIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e8fbf2;
  color: #00a76f;
`;

const CrossIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff0f0;
  color: #e84142;
`;

const USPTd = styled.td`
  padding: 14px 20px;
  vertical-align: top;
  border-bottom: 1px solid #eaecf5;

  &:first-child {
    position: sticky;
    left: 0;
    z-index: 5;
    background: #fff;
    box-shadow: 4px 0 12px -4px rgba(0, 0, 0, 0.08);
    @media (min-width: 992px) {
      box-shadow: none;
    }
  }
`;

const USPList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const USPItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #555;
  svg {
    color: #00a76f;
    flex-shrink: 0;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** InsurerHeader — insurer card inside <thead> for one plan column */
function InsurerHeader({ plan }) {
  return (
    <InsurerCard $color={plan.color} $accentLight={plan.accentLight}>
      <InsurerTop>
        <LogoCircle $color={plan.color}>{plan.logo}</LogoCircle>
        <div>
          <InsurerName>{plan.insurer}</InsurerName>
          <InsurerSub>{plan.type}</InsurerSub>
        </div>
      </InsurerTop>

      {plan.badge && <Badge $color={plan.color}>{plan.badge}</Badge>}

      <IDVRow>
        IDV: <span>{plan.idv}</span>
      </IDVRow>

      <SelectBtn $color={plan.color}>Select Plan</SelectBtn>
    </InsurerCard>
  );
}

/**
 * InsurerUSPSection
 * Collapsible section — data: uspData[] ({ planId, highlights[] })
 * Completely independent of plans[] shape.
 */
function InsurerUSPSection({ uspData, colCount, isOpen, onToggle }) {
  return (
    <>
      <SectionTr onClick={onToggle}>
        <SectionTd>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {isOpen ? <FiChevronUp size={13} /> : <FiChevronDown size={13} />}
            Insurer USP
          </div>
        </SectionTd>
        {Array.from({ length: colCount }).map((_, i) => (
          <SectionTd key={i} />
        ))}
      </SectionTr>

      {isOpen && (
        <tr>
          <USPTd>
            <LabelInner style={{ color: "#888", fontSize: 13 }}>
              <FiStar size={14} style={{ color: "#AAB4CF" }} />
              Highlights
            </LabelInner>
          </USPTd>
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

/**
 * PremiumBreakupSection
 * Collapsible section — data: premiumBreakupRows[]
 * Each row: { key, label, icon, bold, columnValues: string[] }
 */
function PremiumBreakupSection({ rows, colCount, isOpen, onToggle }) {
  return (
    <>
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

      {isOpen &&
        rows.map((row) => (
          <DataTr key={row.key}>
            <LabelTd $bold={row.bold}>
              <LabelInner>
                {row.icon}
                {row.label}
              </LabelInner>
            </LabelTd>
            {row.columnValues.map((value, i) => (
              <ValueTd key={i} $bold={row.bold}>
                {value}
              </ValueTd>
            ))}
          </DataTr>
        ))}
    </>
  );
}

/**
 * AddonDetailsSection
 * Collapsible section — data: addonDetailRows[]
 * Each row: { key, label, icon, bold, columnValues: boolean[] }
 */
function AddonDetailsSection({ rows, colCount, isOpen, onToggle }) {
  return (
    <>
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

      {isOpen &&
        rows.map((row) => (
          <DataTr key={row.key}>
            <LabelTd $bold={row.bold}>
              <LabelInner>
                {row.icon}
                {row.label}
              </LabelInner>
            </LabelTd>
            {row.columnValues.map((available, i) => (
              <ValueTd key={i} $bold={row.bold}>
                {available ? (
                  <CheckIcon>
                    <FiCheck size={12} />
                  </CheckIcon>
                ) : (
                  <CrossIcon>
                    <FiX size={12} />
                  </CrossIcon>
                )}
              </ValueTd>
            ))}
          </DataTr>
        ))}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_OPEN = { usp: true, premiumBreakup: true, addonDetails: true };

export default function InsuranceComparison() {
  const [openSections, setOpenSections] = useState(INITIAL_OPEN);
  const toggle = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* Vehicle info — hidden on mobile */}
        <VehicleCard>
          {[
            ["Model", vehicle.model],
            ["Fuel Type", vehicle.fuelType],
            ["Variant", vehicle.variant],
            ["Policy Type", vehicle.policyType],
            ["Registration Date", vehicle.regDate],
            ["Policy Start Date", vehicle.startDate],
          ].map(([label, val]) => (
            <VehiclePill key={label}>
              <span>{label}</span>
              <span>{val}</span>
            </VehiclePill>
          ))}
        </VehicleCard>

        {/* Comparison table */}
        <TableContainer>
          <ScrollOuter>
            <Table>
              {/* thead — sticky on desktop, hidden on mobile */}
              <Thead>
                <tr>
                  <Th>
                    <FirstColHeader>Plan Comparison</FirstColHeader>
                  </Th>
                  {plans.map((plan) => (
                    <Th key={plan.id}>
                      <InsurerHeader plan={plan} />
                    </Th>
                  ))}
                </tr>
              </Thead>

              {/* tbody — each section owns its own data */}
              <Tbody>
                <InsurerUSPSection
                  uspData={uspData}
                  colCount={plans.length}
                  isOpen={openSections.usp}
                  onToggle={() => toggle("usp")}
                />
                <PremiumBreakupSection
                  rows={premiumBreakupRows}
                  colCount={plans.length}
                  isOpen={openSections.premiumBreakup}
                  onToggle={() => toggle("premiumBreakup")}
                />
                <AddonDetailsSection
                  rows={addonDetailRows}
                  colCount={plans.length}
                  isOpen={openSections.addonDetails}
                  onToggle={() => toggle("addonDetails")}
                />
              </Tbody>
            </Table>
          </ScrollOuter>
        </TableContainer>
      </Wrapper>
    </>
  );
}
