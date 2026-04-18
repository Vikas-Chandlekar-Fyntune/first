import { useState } from "react";

// data
import { vehicle, plans, rows } from "./data";

// sub-components
import InsurerHeader from "./InsurerHeader";
import TableSection from "./TableSection";

// styles
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

// derive unique section names in order
const ALL_SECTIONS = ["Insurer USP", ...new Set(rows.map((r) => r.section))];

const INITIAL_OPEN = Object.fromEntries(ALL_SECTIONS.map((s) => [s, true]));

export default function InsuranceComparison1() {
  const [openSections, setOpenSections] = useState(INITIAL_OPEN);

  const toggle = (section) =>
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

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
              {/* thead — sticky first col + insurer header cards */}
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

              {/* tbody — one <TableSection> per section */}
              <Tbody>
                {ALL_SECTIONS.map((section) => (
                  <TableSection
                    key={section}
                    section={section}
                    rows={rows.filter((r) => r.section === section)}
                    plans={plans}
                    isOpen={openSections[section]}
                    onToggle={() => toggle(section)}
                    isUSP={section === "Insurer USP"}
                  />
                ))}
              </Tbody>
            </Table>
          </ScrollOuter>
        </TableContainer>
      </Wrapper>
    </>
  );
}
