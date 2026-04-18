import React from "react";

const Eight = () => {
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
          }}
        >
          {/* LEFT SIDEBAR */}
          <aside
            style={{
              background: "#f1f1f1",
              display: "grid",
              gridTemplateRows: "auto minmax(0, 1fr)",
              minHeight: 0,
            }}
          >
            {/* div1 (sticky) */}
            <div
              style={{
                position: "sticky",
                top: 0,
                background: "#f1f1f1",
                padding: "1rem",
                borderBottom: "1px solid #ccc",
                zIndex: 2,
              }}
            >
              div1 (Sticky Top)
            </div>

            {/* div2 (scroll container) */}
            <div
              style={{
                overflow: "auto",
                minHeight: 0,
                display: "grid",
                gridTemplateRows: "auto minmax(0, 1fr)",
              }}
            >
              {/* div21 (sticky inside scroll) */}
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#ddd",
                  padding: "1rem",
                  borderBottom: "1px solid #aaa",
                  zIndex: 1,
                }}
              >
                div21 (Sticky inside scroll)
              </div>

              {/* div22 (scroll content) */}
              <div style={{ minHeight: 0 }}>
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1rem",
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    div22 Item {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* CENTER */}
          <section
            style={{
              background: "aqua",
              display: "grid",
              gridTemplateRows: "auto minmax(0, 1fr)",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            {/* Sticky header */}
            <div
              style={{
                position: "sticky",
                top: 0,
                background: "#fff",
                padding: "1rem",
                borderBottom: "1px solid #ccc",
                zIndex: 1,
              }}
            >
              Sticky Header Inside Center
            </div>

            {/* Scroll content */}
            <div
              style={{
                overflow: "auto",
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
          </section>

          {/* RIGHT SIDEBAR */}
          <aside
            style={{
              background: "pink",
              overflow: "auto",
              minHeight: 0,
            }}
          >
            {[...Array(20)].map((_, i) => (
              <div key={i} style={{ padding: "1rem" }}>
                Right Item {i + 1}
              </div>
            ))}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Eight;
