import {
  InsurerCard, InsurerTop, LogoCircle,
  InsurerName, InsurerSub, Badge, IDVRow, SelectBtn,
} from "./styles";

/**
 * InsurerHeader
 * Renders the insurer card shown in <thead> for one plan column.
 *
 * Props:
 *   plan  – { id, insurer, type, logo, color, accentLight, idv, badge }
 */
export default function InsurerHeader({ plan }) {
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

      <IDVRow>IDV: <span>{plan.idv}</span></IDVRow>

      <SelectBtn $color={plan.color}>Select Plan</SelectBtn>
    </InsurerCard>
  );
}
