const Six = () => {
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
          gridTemplateRows: "auto minmax(0, 1fr)",
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
            minHeight: 0,
            overflow: "hidden",
            padding: "1rem",
            alignItems: "stretch",
          }}
        >
          {/* Left Sidebar */}
          <aside
            style={{
              background: "#f1f1f1",
              overflow: "auto",
              alignSelf: "start",
              maxHeight: "100%",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i}>Left Item {i + 1}</div>
            ))}
          </aside>

          {/* Center */}
          <section
            style={{
              background: "aqua",
              minWidth: 0,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden", // 👈 important
            }}
          >
            {/* 🔝 Sticky Top */}
            <div
              style={{
                position: "sticky",
                top: 0,
                background: "white",
                padding: "1rem",
                borderBottom: "1px solid #ccc",
                zIndex: 2,
              }}
            >
              Sticky Header
            </div>

            {/* 📜 Scrollable Content */}
            <div
              style={{
                flex: 1,
                overflow: "auto", // 👈 only this scrolls
                minHeight: 0,
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
            </div>

            {/* 🔻 Bottom Bar (always visible) */}
            <div
              style={{
                background: "white",
                padding: "1rem",
                borderTop: "1px solid #ccc",
              }}
            >
              Bottom Bar
            </div>
          </section>

          {/* Right Sidebar */}
          <aside
            style={{
              background: "#f9f9f9",
              overflow: "auto",
              alignSelf: "start",
              maxHeight: "100%",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i}>Right Item {i + 1}</div>
            ))}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Six;
