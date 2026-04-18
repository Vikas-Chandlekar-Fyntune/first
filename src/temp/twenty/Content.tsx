import imgSrc from "./mmv_cv.png";

const Content = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "90%",
        maxHeight: "500px",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "3fr 2fr",
          height: "500px", // ← match maxHeight
        }}
      >
        {/* Image */}
        <div style={{ height: "100%" }}>
          <img
            src={imgSrc}
            alt="CV"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right Side */}
        <div
          style={{
            overflowY: "auto", // ← scroll only the right side
          }}
        >
          {Array.from({ length: 200 }).map((_, i) => (
            <p key={i}>Right side scroll content line {i + 1}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
