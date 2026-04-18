import { useState } from "react";

// data — each section pulls from its own dedicated data export
import {
  vehicle,
  plans,
  uspData,
  premiumBreakupRows,
  addonDetailRows,
} from "./data1";

// section components — each is self-contained with its own data shape
import InsurerHeader from "./InsurerHeader";
import InsurerUSPSection from "./InsurerUSPSection";
import PremiumBreakupSection from "./PremiumBreakupSection";
import AddonDetailsSection from "./AddonDetailsSection";

// shared styles
import {
  GlobalStyle,
  Wrapper,
  VehicleCard,
  VehiclePill,
  TableContainer,
  ScrollOuter,
  Table,
  Thead,
  Tbody,
  Th,
  FirstColHeader,
} from "./styles";

const SECTIONS = ["usp", "premiumBreakup", "addonDetails"];
const INITIAL_OPEN = Object.fromEntries(SECTIONS.map((s) => [s, true]));

export default function InsuranceComparison11() {
  const [openSections, setOpenSections] = useState(INITIAL_OPEN);

  const toggle = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* ── Vehicle info bar ──────────────────────────────── */}
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

        {/* ── Comparison table ──────────────────────────────── */}
        <TableContainer>
          <ScrollOuter>
            <Table>
              {/* thead — label col + one InsurerHeader per plan */}
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

              {/* tbody — each section is a fully independent component */}
              <Tbody>
                {/* Section 1: Insurer USP — data: uspData[] */}
                <InsurerUSPSection
                  uspData={uspData}
                  colCount={plans.length}
                  isOpen={openSections.usp}
                  onToggle={() => toggle("usp")}
                />

                {/* Section 2: Premium Breakup — data: premiumBreakupRows[] */}
                <PremiumBreakupSection
                  rows={premiumBreakupRows}
                  colCount={plans.length}
                  isOpen={openSections.premiumBreakup}
                  onToggle={() => toggle("premiumBreakup")}
                />

                {/* Section 3: Addon Details — data: addonDetailRows[] */}
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
