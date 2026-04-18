import { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import {
  FiCheck,
  FiX,
  FiShield,
  FiStar,
  FiPhone,
  FiTruck,
  FiAlertCircle,
  FiInfo,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: #F4F6FA; color: #1A1D2E; }
  html { scroll-behavior: smooth; }
`;

// ── dummy data ──────────────────────────────────────────────────────────────
const vehicle = {
  model: "Mahindra & Mahindra",
  fuelType: "Diesel",
  variant: "AT-2157CC",
  policyType: "Bundled (1yr + 3yr OD)",
  regDate: "22-01-23",
  startDate: "22-02-23",
};

const plans = [
  {
    id: 1,
    insurer: "ICICI Lombard",
    type: "General Insurance",
    logo: "🛡️",
    color: "#E84142",
    accentLight: "#FFF0F0",
    idv: "₹5,24,663",
    badge: "Recommended",
    premium: {
      own: "₹15,780",
      third: "₹10,640",
      addon: "₹0",
      discount: "₹0",
      gst: "₹4,000",
      gross: "₹31,176",
    },
    usps: [
      "Reliable Customer Support",
      "Instant Motor Claims",
      "9700 Cashless Garages",
      "24/7 Customer Support",
    ],
    addons: {
      personalAccident: false,
      engineProtect: true,
      zeroDep: true,
      roadside: true,
      consumables: false,
      returnToInvoice: true,
    },
  },
  {
    id: 2,
    insurer: "Bajaj Allianz",
    type: "General Insurance",
    logo: "🏆",
    color: "#0057A8",
    accentLight: "#EFF5FF",
    idv: "₹5,10,000",
    badge: "Best Value",
    premium: {
      own: "₹20,782",
      third: "₹10,790",
      addon: "₹0",
      discount: "₹9,352",
      gst: "₹4,756",
      gross: "₹31,176",
    },
    usps: [
      "Dual Coverage of Third Party Risks",
      "7100+ Cashless Garages",
      "24/7 Customer Support",
      "Quick Claim Settlement",
    ],
    addons: {
      personalAccident: false,
      engineProtect: false,
      zeroDep: true,
      roadside: true,
      consumables: true,
      returnToInvoice: false,
    },
  },
  {
    id: 3,
    insurer: "HDFC ERGO",
    type: "General Insurance",
    logo: "💎",
    color: "#00845A",
    accentLight: "#EDFAF4",
    idv: "₹5,35,000",
    badge: "Premium",
    premium: {
      own: "₹18,250",
      third: "₹10,640",
      addon: "₹1,200",
      discount: "₹0",
      gst: "₹4,327",
      gross: "₹34,417",
    },
    usps: [
      "10,000+ Cashless Garages",
      "AI-Powered Claims",
      "3-Year Long Term OD",
      "Dedicated Claim Manager",
    ],
    addons: {
      personalAccident: true,
      engineProtect: true,
      zeroDep: true,
      roadside: true,
      consumables: true,
      returnToInvoice: true,
    },
  },
  {
    id: 4,
    insurer: "New India Assurance",
    type: "General Insurance",
    logo: "🇮🇳",
    color: "#F58020",
    accentLight: "#FFF7EE",
    idv: "₹4,98,000",
    badge: null,
    premium: {
      own: "₹14,500",
      third: "₹10,640",
      addon: "₹0",
      discount: "₹0",
      gst: "₹3,622",
      gross: "₹28,762",
    },
    usps: [
      "Government Backed",
      "Pan-India Network",
      "5000+ Cashless Garages",
      "Hassle-Free Claims",
    ],
    addons: {
      personalAccident: false,
      engineProtect: false,
      zeroDep: false,
      roadside: false,
      consumables: false,
      returnToInvoice: false,
    },
  },
];

const rows = [
  {
    section: "Premium Breakup",
    key: "own",
    label: "Own Damage Premium",
    icon: <FiShield size={14} />,
  },
  {
    section: "Premium Breakup",
    key: "third",
    label: "Third Party Premium",
    icon: <FiAlertCircle size={14} />,
  },
  {
    section: "Premium Breakup",
    key: "addon",
    label: "Addon Premium",
    icon: <FiStar size={14} />,
  },
  {
    section: "Premium Breakup",
    key: "discount",
    label: "Total Discount (NCB 0% Incl.)",
    icon: <FiInfo size={14} />,
  },
  {
    section: "Premium Breakup",
    key: "gst",
    label: "GST",
    icon: <FiInfo size={14} />,
  },
  {
    section: "Premium Breakup",
    key: "gross",
    label: "Gross Premium (incl GST)",
    icon: null,
    bold: true,
  },
  {
    section: "Addon Details",
    key: "personalAccident",
    label: "Compulsory Personal Accident",
    icon: <FiShield size={14} />,
    isAddon: true,
  },
  {
    section: "Addon Details",
    key: "engineProtect",
    label: "Engine Protection",
    icon: <FiTruck size={14} />,
    isAddon: true,
  },
  {
    section: "Addon Details",
    key: "zeroDep",
    label: "Zero Depreciation",
    icon: <FiStar size={14} />,
    isAddon: true,
  },
  {
    section: "Addon Details",
    key: "roadside",
    label: "Roadside Assistance",
    icon: <FiPhone size={14} />,
    isAddon: true,
  },
  {
    section: "Addon Details",
    key: "consumables",
    label: "Consumables Cover",
    icon: <FiInfo size={14} />,
    isAddon: true,
  },
  {
    section: "Addon Details",
    key: "returnToInvoice",
    label: "Return to Invoice",
    icon: <FiAlertCircle size={14} />,
    isAddon: true,
  },
];

// ── styled components ────────────────────────────────────────────────────────
const fadeIn = keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 32px auto;
  padding: 0 16px 48px;
  animation: ${fadeIn} 0.5s ease both;
`;

const VehicleCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
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

const TableContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
`;

const ScrollOuter = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 6px;
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

const Thead = styled.thead``;
const Tbody = styled.tbody``;

// Header row — insurer cards
const Th = styled.th`
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
    box-shadow: 4px 0 12px -4px rgba(0, 0, 0, 0.1);
    @media (min-width: 992px) {
      box-shadow: none;
    }
  }
`;

const InsurerCard = styled.div`
  padding: 20px 16px 16px;
  background: ${(p) => p.accentLight || "#fafafa"};
  border-bottom: 3px solid ${(p) => p.color || "#ddd"};
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
  background: ${(p) => p.color}18;
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
  background: ${(p) => p.color};
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

// Section header row
const SectionTr = styled.tr`
  background: #f4f6fa;
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

// Data rows
const DataTr = styled.tr`
  transition: background 0.15s;
  &:hover {
    background: #f8f9fd;
  }
  &:last-child td {
    border-bottom: none;
  }
`;

const LabelTd = styled.td`
  padding: 13px 16px;
  font-size: 13px;
  color: #444;
  font-weight: ${(p) => (p.bold ? "700" : "400")};
  border-bottom: 1px solid #eaecf5;
  white-space: nowrap;
  display: table-cell;
  vertical-align: middle;
  background: ${(p) => (p.bold ? "#FAFBFE" : "transparent")};

  position: sticky;
  left: 0;
  z-index: 5;
  background: ${(p) => (p.bold ? "#FAFBFE" : "#fff")};
  box-shadow: 4px 0 12px -4px rgba(0, 0, 0, 0.08);
  @media (min-width: 992px) {
    box-shadow: none;
  }
`;

const LabelInner = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #667;
  svg {
    color: #aab4cf;
  }
`;

const ValueTd = styled.td`
  padding: 13px 20px;
  font-size: 13px;
  text-align: center;
  font-weight: ${(p) => (p.bold ? "700" : "400")};
  color: ${(p) => (p.bold ? "#1A1D2E" : "#555")};
  border-bottom: 1px solid #eaecf5;
  vertical-align: middle;
  background: ${(p) => (p.bold ? "#FAFBFE" : "transparent")};
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

// USP section
const USPTr = styled.tr``;
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

const SelectBtn = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 9px 0;
  background: ${(p) => p.color};
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

// ── component ────────────────────────────────────────────────────────────────
const sections = [...new Set(rows.map((r) => r.section))];

export default function InsuranceComparison() {
  const [expandedSections, setExpandedSections] = useState({
    "Premium Breakup": true,
    "Addon Details": true,
    "Insurer USP": true,
  });

  const toggleSection = (s) =>
    setExpandedSections((p) => ({ ...p, [s]: !p[s] }));

  const allSectionsWithUSP = ["Insurer USP", ...sections];

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* Vehicle Info */}
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

        {/* Comparison Table */}
        <TableContainer>
          <ScrollOuter>
            <Table>
              <Thead>
                <tr>
                  {/* First col header */}
                  <Th>
                    <FirstColHeader>Plan Comparison</FirstColHeader>
                  </Th>
                  {plans.map((plan) => (
                    <Th key={plan.id}>
                      <InsurerCard
                        color={plan.color}
                        accentLight={plan.accentLight}
                      >
                        <InsurerTop>
                          <LogoCircle color={plan.color}>
                            {plan.logo}
                          </LogoCircle>
                          <div>
                            <InsurerName>{plan.insurer}</InsurerName>
                            <InsurerSub>{plan.type}</InsurerSub>
                          </div>
                        </InsurerTop>
                        {plan.badge && (
                          <Badge color={plan.color}>{plan.badge}</Badge>
                        )}
                        <IDVRow>
                          IDV: <span>{plan.idv}</span>
                        </IDVRow>
                        <SelectBtn color={plan.color}>Select Plan</SelectBtn>
                      </InsurerCard>
                    </Th>
                  ))}
                </tr>
              </Thead>

              <Tbody>
                {allSectionsWithUSP.map((section) => {
                  const isOpen = expandedSections[section] !== false;
                  const sectionRows = rows.filter((r) => r.section === section);

                  return [
                    // Section header
                    <SectionTr key={`sec-${section}`}>
                      <SectionTd
                        colSpan={1}
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleSection(section)}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          {isOpen ? (
                            <FiChevronUp size={13} />
                          ) : (
                            <FiChevronDown size={13} />
                          )}
                          {section}
                        </div>
                      </SectionTd>
                      {plans.map((p) => (
                        <SectionTd
                          key={p.id}
                          style={{ cursor: "pointer" }}
                          onClick={() => toggleSection(section)}
                        />
                      ))}
                    </SectionTr>,

                    // USP section special
                    ...(section === "Insurer USP" && isOpen
                      ? [
                          <USPTr key="usp-row">
                            <USPTd>
                              <LabelInner
                                style={{ color: "#888", fontSize: 13 }}
                              >
                                {/* <FiStar
                                  size={14}
                                  style={{ color: "#AAB4CF" }}
                                />{" "}
                                Highlights */}
                              </LabelInner>
                            </USPTd>
                            {plans.map((plan) => (
                              <USPTd key={plan.id}>
                                <USPList>
                                  {plan.usps.map((u) => (
                                    <USPItem key={u}>
                                      <FiCheck size={12} />
                                      {u}
                                    </USPItem>
                                  ))}
                                </USPList>
                              </USPTd>
                            ))}
                          </USPTr>,
                        ]
                      : []),

                    // Data rows for this section
                    ...(isOpen
                      ? sectionRows.map((row) => (
                          <DataTr key={row.key}>
                            <LabelTd bold={row.bold}>
                              <LabelInner>
                                {row.icon}
                                {row.label}
                              </LabelInner>
                            </LabelTd>
                            {plans.map((plan) => {
                              const val = row.isAddon
                                ? plan.addons[row.key]
                                : plan.premium[row.key];
                              return (
                                <ValueTd key={plan.id} bold={row.bold}>
                                  {row.isAddon ? (
                                    val ? (
                                      <CheckIcon>
                                        <FiCheck size={12} />
                                      </CheckIcon>
                                    ) : (
                                      <CrossIcon>
                                        <FiX size={12} />
                                      </CrossIcon>
                                    )
                                  ) : (
                                    val
                                  )}
                                </ValueTd>
                              );
                            })}
                          </DataTr>
                        ))
                      : []),
                  ];
                })}
              </Tbody>
            </Table>
          </ScrollOuter>
        </TableContainer>
      </Wrapper>
    </>
  );
}
