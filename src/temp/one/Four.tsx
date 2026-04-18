
export default function Four() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "#ffffff",
          zIndex: 1000,
          padding: "16px",
          borderBottom: "1px solid #ddd",
        }}
      >
        Header
      </header>

      <main style={{ padding: "20px" }}>
        <div>
          <h1
            style={{
              position: "sticky",
              top: "60px", // header height
              background: "#ffffff",
              zIndex: 999,
              margin: 0,
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            Title
          </h1>

          <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
            {Array.from({ length: 50 }, (_, i) => (
              <p key={i}>
                This is some sample content to demonstrate the sticky header and
                title. Scroll down to see how they remain fixed at the top of
                the page.
              </p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
