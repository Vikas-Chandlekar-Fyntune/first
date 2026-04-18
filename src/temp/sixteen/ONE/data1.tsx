import {
  FiShield,
  FiStar,
  FiPhone,
  FiTruck,
  FiAlertCircle,
  FiInfo,
} from "react-icons/fi";

// ── Vehicle ───────────────────────────────────────────────────────────────────
export const vehicle = {
  model: "Mahindra & Mahindra",
  fuelType: "Diesel",
  variant: "AT-2157CC",
  policyType: "Bundled (1yr + 3yr OD)",
  regDate: "22-01-23",
  startDate: "22-02-23",
};

// ── Plan column headers (insurer cards only) ──────────────────────────────────
export const plans = [
  {
    id: "icici",
    insurer: "ICICI Lombard",
    type: "General Insurance",
    logo: "🛡️",
    color: "#E84142",
    accentLight: "#FFF0F0",
    idv: "₹5,24,663",
    badge: "Recommended",
  },
  {
    id: "bajaj",
    insurer: "Bajaj Allianz",
    type: "General Insurance",
    logo: "🏆",
    color: "#0057A8",
    accentLight: "#EFF5FF",
    idv: "₹5,10,000",
    badge: "Best Value",
  },
  {
    id: "hdfc",
    insurer: "HDFC ERGO",
    type: "General Insurance",
    logo: "💎",
    color: "#00845A",
    accentLight: "#EDFAF4",
    idv: "₹5,35,000",
    badge: "Premium",
  },
];

// ── Section: Insurer USP ──────────────────────────────────────────────────────
// Each entry maps to a plan column by planId.
// The "values" array is independent — could come from any API/source.
export const uspData = [
  {
    planId: "icici",
    highlights: [
      "Reliable Customer Support",
      "Instant Motor Claims",
      "9700 Cashless Garages",
      "24/7 Customer Support",
    ],
  },
  {
    planId: "bajaj",
    highlights: [
      "Dual Coverage of Third Party Risks",
      "7100+ Cashless Garages",
      "24/7 Customer Support",
      "Quick Claim Settlement",
    ],
  },
  {
    planId: "hdfc",
    highlights: [
      "10,000+ Cashless Garages",
      "AI-Powered Claims",
      "3-Year Long Term OD",
      "Dedicated Claim Manager",
    ],
  },
];

// ── Section: Premium Breakup ──────────────────────────────────────────────────
// Row definitions are independent of plans.
// columnValues array follows the same order as plans[].
export const premiumBreakupRows = [
  {
    key: "own",
    label: "Own Damage Premium",
    icon: <FiShield size={14} />,
    bold: false,
    columnValues: ["₹15,780", "₹20,782", "₹18,250"],
  },
  {
    key: "third",
    label: "Third Party Premium",
    icon: <FiAlertCircle size={14} />,
    bold: false,
    columnValues: ["₹10,640", "₹10,790", "₹10,640"],
  },
  {
    key: "addon",
    label: "Addon Premium",
    icon: <FiStar size={14} />,
    bold: false,
    columnValues: ["₹0", "₹0", "₹1,200"],
  },
  {
    key: "discount",
    label: "Total Discount (NCB 0% Incl.)",
    icon: <FiInfo size={14} />,
    bold: false,
    columnValues: ["₹0", "₹9,352", "₹0"],
  },
  {
    key: "gst",
    label: "GST",
    icon: <FiInfo size={14} />,
    bold: false,
    columnValues: ["₹4,000", "₹4,756", "₹4,327"],
  },
  {
    key: "gross",
    label: "Gross Premium (incl GST)",
    icon: null,
    bold: true,
    columnValues: ["₹31,176", "₹31,176", "₹34,417"],
  },
];

// ── Section: Addon Details ────────────────────────────────────────────────────
// columnValues are booleans — true = available, false = not available.
export const addonDetailRows = [
  {
    key: "personalAccident",
    label: "Compulsory Personal Accident",
    icon: <FiShield size={14} />,
    bold: false,
    columnValues: [false, false, true],
  },
  {
    key: "engineProtect",
    label: "Engine Protection",
    icon: <FiTruck size={14} />,
    bold: false,
    columnValues: [true, false, true],
  },
  {
    key: "zeroDep",
    label: "Zero Depreciation",
    icon: <FiStar size={14} />,
    bold: false,
    columnValues: [true, true, true],
  },
  {
    key: "roadside",
    label: "Roadside Assistance",
    icon: <FiPhone size={14} />,
    bold: false,
    columnValues: [true, true, true],
  },
  {
    key: "consumables",
    label: "Consumables Cover",
    icon: <FiInfo size={14} />,
    bold: false,
    columnValues: [false, true, true],
  },
  {
    key: "returnToInvoice",
    label: "Return to Invoice",
    icon: <FiAlertCircle size={14} />,
    bold: false,
    columnValues: [true, false, true],
  },
];
