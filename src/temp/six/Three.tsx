import TwoColumnStickyLayout2 from "./components/TwoColumnStickyLayout2";

export default function Page() {
  return (
    <TwoColumnStickyLayout2 leftWidth="30%" rightWidth="70%" stickyOffset={0}>
      <TwoColumnStickyLayout2.Left>
        <h2>Sticky Section</h2>
        <p>This content will stick while the page scrolls.</p>
      </TwoColumnStickyLayout2.Left>

      <TwoColumnStickyLayout2.Right>
        {[...Array(77)].map((_, i) => (
          <p key={i}>Scrollable content line {i + 1}</p>
        ))}
      </TwoColumnStickyLayout2.Right>
    </TwoColumnStickyLayout2>
  );
}
