import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: #F4F6FA; color: #1A1D2E; }
  html { scroll-behavior: smooth; }
`;

const fadeIn = keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`;

// ── Layout ───────────────────────────────────────────────────────────────────
export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 32px auto;
  padding: 0 16px 48px;
  animation: ${fadeIn} 0.5s ease both;
`;

export const TableContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
`;

export const ScrollOuter = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  &::-webkit-scrollbar { height: 6px; }
  &::-webkit-scrollbar-track { background: #f0f0f0; }
  &::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  min-width: 720px;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;

// ── Vehicle Card ─────────────────────────────────────────────────────────────
export const VehicleCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
`;

export const VehiclePill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  span:first-child { font-size: 11px; color: #888; font-weight: 500; text-transform: uppercase; letter-spacing: .5px; }
  span:last-child  { font-size: 14px; color: #1A1D2E; font-weight: 600; }
`;

// ── Header ───────────────────────────────────────────────────────────────────
export const Th = styled.th`
  padding: 0;
  background: #fff;
  vertical-align: top;
  position: relative;
  min-width: 190px;

  &:first-child {
    min-width: 200px;
    width: 200px;
    position: sticky;
    left: 0;
    z-index: 10;
    background: #fff;
    box-shadow: 4px 0 12px -4px rgba(0,0,0,0.10);
    @media(min-width:992px){ box-shadow: none; }
  }
`;

export const FirstColHeader = styled.div`
  padding: 20px 16px;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  height: 100%;
  display: flex;
  align-items: flex-end;
  background: #FAFBFE;
  border-bottom: 1px solid #EAECF5;
`;

export const InsurerCard = styled.div`
  padding: 20px 16px 16px;
  background: ${p => p.$accentLight || "#fafafa"};
  border-bottom: 3px solid ${p => p.$color || "#ddd"};
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`;

export const InsurerTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoCircle = styled.div`
  width: 38px; height: 38px;
  border-radius: 10px;
  background: ${p => p.$color}18;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;

export const InsurerName = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #1A1D2E;
  line-height: 1.3;
`;

export const InsurerSub = styled.div`
  font-size: 11px;
  color: #888;
`;

export const Badge = styled.span`
  display: inline-block;
  background: ${p => p.$color};
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
  letter-spacing: .3px;
  width: fit-content;
`;

export const IDVRow = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #555;
  span { font-weight: 700; color: #1A1D2E; }
`;

export const SelectBtn = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 9px 0;
  background: ${p => p.$color};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: .3px;
  transition: opacity 0.15s, transform 0.1s;
  &:hover { opacity: 0.88; transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`;

// ── Section Header Row ────────────────────────────────────────────────────────
export const SectionTr = styled.tr`
  background: #F4F6FA;
`;

export const SectionTd = styled.td`
  padding: 8px 16px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #8892B0;
  border-bottom: 1px solid #EAECF5;

  &:first-child {
    position: sticky;
    left: 0;
    z-index: 5;
    background: #F4F6FA;
    box-shadow: 4px 0 12px -4px rgba(0,0,0,0.08);
    @media(min-width:992px){ box-shadow: none; }
  }
`;

// ── Data Rows ─────────────────────────────────────────────────────────────────
export const DataTr = styled.tr`
  transition: background 0.15s;
  &:hover { background: #F8F9FD; }
  &:last-child td { border-bottom: none; }
`;

export const LabelTd = styled.td`
  padding: 13px 16px;
  font-size: 13px;
  color: #444;
  font-weight: ${p => p.$bold ? "700" : "400"};
  border-bottom: 1px solid #EAECF5;
  white-space: nowrap;
  vertical-align: middle;
  position: sticky;
  left: 0;
  z-index: 5;
  background: ${p => p.$bold ? "#FAFBFE" : "#fff"};
  box-shadow: 4px 0 12px -4px rgba(0,0,0,0.08);
  @media(min-width:992px){ box-shadow: none; }
`;

export const LabelInner = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #667;
  svg { color: #AAB4CF; }
`;

export const ValueTd = styled.td`
  padding: 13px 20px;
  font-size: 13px;
  text-align: center;
  font-weight: ${p => p.$bold ? "700" : "400"};
  color: ${p => p.$bold ? "#1A1D2E" : "#555"};
  border-bottom: 1px solid #EAECF5;
  vertical-align: middle;
  background: ${p => p.$bold ? "#FAFBFE" : "transparent"};
  min-width: 190px;
  transition: background 0.15s;
`;

export const CheckIcon = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: #E8FBF2;
  color: #00A76F;
`;

export const CrossIcon = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: #FFF0F0;
  color: #E84142;
`;

// ── USP Section ───────────────────────────────────────────────────────────────
export const USPTr = styled.tr``;

export const USPTd = styled.td`
  padding: 14px 20px;
  vertical-align: top;
  border-bottom: 1px solid #EAECF5;
  &:first-child {
    position: sticky;
    left: 0;
    z-index: 5;
    background: #fff;
    box-shadow: 4px 0 12px -4px rgba(0,0,0,0.08);
    @media(min-width:992px){ box-shadow: none; }
  }
`;

export const USPList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const USPItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #555;
  svg { color: #00A76F; flex-shrink: 0; }
`;
