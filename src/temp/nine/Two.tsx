import { useEffect, useRef } from "react";
import "./two.css";

function Two() {
  const headerRef = useRef(null);

  useEffect(() => {
    const setHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height;
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`
        );
      }
    };

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  return (
    <div>
      <header ref={headerRef} className="page-header">
        Header with dynamic height
      </header>

      <main className="page-main">
        <div className="layout">
          <div className="sidebar">
            <p>Sticky Notes</p>
            {[...Array(10)].map((_, i) => (
              <p key={i}>Note {i + 1}</p>
            ))}
          </div>

          <div className="content">
            {[...Array(400)].map((_, i) => (
              <p key={i}>Main content {i + 1}</p>
            ))}
          </div>
        </div>
      </main>

      <footer className="page-footer">Footer</footer>
    </div>
  );
}

export default Two;
