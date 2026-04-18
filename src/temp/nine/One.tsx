import "./one.css";

function One() {
  return (
    <>
      <div>
        <header className="page-header">Header</header>

        <main className="page-main">
          <div className="layout">
            {/* Left Sticky */}
            <div className="sidebar">
              <p>Sticky Notes</p>
              {[...Array(100)].map((_, i) => (
                <p key={i}>Note {i + 1}</p>
              ))}
            </div>

            {/* Right Scrollable */}
            <div className="content">
              {[...Array(40)].map((_, i) => (
                <p key={i}>Main content {i + 1}</p>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default One;
