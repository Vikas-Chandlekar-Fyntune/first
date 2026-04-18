export default function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        height: "100dvh",
      }}
    >
      <header
        style={{
          backgroundColor: "#1a1a2e",
          color: "#ffffff",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "1.25rem",
            fontWeight: "600",
            letterSpacing: "0.02em",
          }}
        >
          MyApp
        </h1>
      </header>

      <main
        style={{
          backgroundColor: "#f5f5f5",
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem",
        }}
      >
        <div
          style={{
            width: "min(90%, 600px)",
            maxHeight: "min(85dvh, 700px)",
            overflowY: "auto",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "clamp(1.5rem, 5%, 3rem)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Label */}
          <p
            style={{
              margin: 0,
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#aaa",
              fontWeight: "600",
            }}
          >
            Getting Started
          </p>

          {/* Title */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: "800",
                lineHeight: "1.15",
                color: "#1a1a2e",
                letterSpacing: "-0.02em",
              }}
            >
              Build something that lasts
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                lineHeight: "1.7",
                color: "#555",
              }}
            >
              A solid layout foundation means your UI stays consistent — whether
              someone is on a 4K monitor, a laptop at 150% scale, or pinching to
              zoom on mobile.
            </p>
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #efefef",
              margin: 0,
            }}
          />

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              textAlign: "center",
            }}
          >
            {[
              { value: "100dvh", label: "Full height" },
              { value: "clamp()", label: "Fluid type" },
              { value: "1fr", label: "Flexible main" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "#f8f8f8",
                  borderRadius: "8px",
                  padding: "1rem 0.5rem",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.25rem 0",
                    fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                    fontWeight: "700",
                    color: "#1a1a2e",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.72rem",
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #efefef",
              margin: 0,
            }}
          />

          {/* Body text section */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                fontWeight: "700",
                color: "#1a1a2e",
              }}
            >
              Why this approach works
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(0.875rem, 1.8vw, 0.975rem)",
                lineHeight: "1.75",
                color: "#555",
              }}
            >
              Using{" "}
              <code
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "0.1em 0.35em",
                  borderRadius: "4px",
                  fontSize: "0.85em",
                  color: "#333",
                }}
              >
                grid-template-rows: auto 1fr
              </code>{" "}
              on the parent lets the header shrink to its natural size while the
              main area claims all remaining space. No magic numbers, no fixed
              heights that break at odd zoom levels.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(0.875rem, 1.8vw, 0.975rem)",
                lineHeight: "1.75",
                color: "#555",
              }}
            >
              Flexbox centering inside{" "}
              <code
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "0.1em 0.35em",
                  borderRadius: "4px",
                  fontSize: "0.85em",
                  color: "#333",
                }}
              >
                main
              </code>{" "}
              is viewport-agnostic — it centers relative to whatever space is
              available, so zooming in or out just changes that available space
              without breaking the alignment.
            </p>
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #efefef",
              margin: 0,
            }}
          />

          {/* Footer note */}
          <p
            style={{
              margin: 0,
              fontSize: "0.78rem",
              lineHeight: "1.6",
              color: "#bbb",
              textAlign: "center",
            }}
          >
            Zoom to 50% or 200% — this card stays centered and readable.
          </p>
        </div>
      </main>
    </div>
  );
}
