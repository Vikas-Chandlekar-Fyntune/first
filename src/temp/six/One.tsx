export default function Page() {
  return (
    <div className="flex p-4 gap-4">
      {/* LEFT COLUMN - div1 */}
      <div className="w-1/3">
        <div className="sticky top-0 bg-white z-10 py-4">
          <h2 className="text-xl font-bold">Div 1 (Sticky)</h2>
          <p>
            This content can be small or large. It sticks to the top of the page
            when scrolling.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN - div2 */}
      <div className="w-2/3 space-y-4">
        <h2 className="text-lg font-semibold">
          Div 2 (Scrollable Page Content)
        </h2>

        {[...Array(60)].map((_, i) => (
          <p key={i} className="text-gray-700">
            Line {i + 1}. Scroll the page; div1 stays sticky.
          </p>
        ))}
      </div>
    </div>
  );
}
