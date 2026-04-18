import TwoColumnStickyLayout from "./components/TwoColumnStickyLayout";

export default function Page() {
  return (
    <TwoColumnStickyLayout leftWidth="w-1/4" rightWidth="w-3/4">
      <TwoColumnStickyLayout.Left>
        <div className="py-4">
          <h2 className="text-xl font-bold">Left Sticky Content</h2>
          <p>This stays sticky when you scroll.</p>
        </div>
      </TwoColumnStickyLayout.Left>

      <TwoColumnStickyLayout.Right>
        {[...Array(100)].map((_, i) => (
          <p key={i}>Right side scroll content line {i + 1}</p>
        ))}
      </TwoColumnStickyLayout.Right>
    </TwoColumnStickyLayout>
  );
}
