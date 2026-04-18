const Two = () => {
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

      {/* Main */}
      <main
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr", // 👈 filter + content
          minHeight: 0, // 🔥 IMPORTANT
        }}
      >
        {/* Filter (Sticky) */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: "#fff",
            padding: "1rem",
            borderBottom: "1px solid #ccc",
          }}
        >
          Filter Container
        </div>

        {/* 3 Column Layout */}
        <div
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
              alignSelf: "start",
            }}
          >
            Left Sidebar
          </aside>

          {/* Center Scroll */}
          <section
            style={{
              background: "aqua",
              overflow: "auto", // ✅ only scroll here
              minHeight: 0,
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
              alignSelf: "start",
            }}
          >
            Right Sidebar
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Two;
