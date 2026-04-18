const One = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ padding: "1rem", background: "#ddd" }}>Header</div>

      {/* Main Layout */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "250px 1fr 250px",
          gap: "1rem",
          minHeight: 0, // 🔥 IMPORTANT
        }}
      >
        {/* Left Sidebar */}
        <aside
          style={{
            background: "#f1f1f1",
            position: "sticky",
            top: 0,
            height: "fit-content",
            alignSelf: "start",
          }}
        >
          Left Sidebar
        </aside>

        {/* Center Content (Scrollable) */}
        <section
          style={{
            background: "aqua",
            overflow: "auto", // ✅ only this scrolls
            minHeight: 0, // 🔥 IMPORTANT
            padding: "1rem",
          }}
        >
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              Post #{i + 1}
            </div>
          ))}
        </section>

        {/* Right Sidebar */}
        <aside
          style={{
            background: "#f9f9f9",
            position: "sticky",
            top: 0,
            height: "fit-content",
            alignSelf: "start",
          }}
        >
          Right Sidebar
        </aside>
      </main>
    </div>
  );
};

export default One;
