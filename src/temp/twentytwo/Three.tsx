const Three = () => {
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
      <header
        style={{
          background: "#ddd",
          padding: "1rem",
        }}
      >
        Header
      </header>

      {/* Main */}
      <main
        style={{
          display: "grid",
          gridTemplateRows: "auto minmax(0, 1fr)", // 🔥 key
          minHeight: 0,
        }}
      >
        {/* Filter */}
        <div
          style={{
            background: "#fff",
            borderBottom: "1px solid #ccc",
            padding: "1rem",
          }}
        >
          Filter Container
        </div>

        {/* 3 Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "250px minmax(0, 1fr) 250px",
            gap: "1rem",
            minHeight: 0, // 🔥 critical
            overflow: "hidden", // prevent leakage
            padding: "1rem",
          }}
        >
          {/* Left Sidebar */}
          <aside
            style={{
              background: "#f1f1f1",
              overflow: "auto", // ✅ scroll if long
            }}
          >
            {[...Array(30)].map((_, i) => (
              <div key={i}>Left Item {i + 1}</div>
            ))}
          </aside>

          {/* Center */}
          <section
            style={{
              background: "aqua",
              overflow: "auto", // ✅ ONLY main scroll
              minWidth: 0, // 🔥 prevents overflow
            }}
          >
            {[...Array(40)].map((_, i) => (
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
              overflow: "auto", // ✅ scroll if long
            }}
          >
            {[...Array(30)].map((_, i) => (
              <div key={i}>Right Item {i + 1}</div>
            ))}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Three;