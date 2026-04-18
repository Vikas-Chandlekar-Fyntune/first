import Content from "./Content";

const One = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100dvh",
          outline: "1px solid pink",
        }}
      >
        <div>Header</div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Content />
        </div>
      </div>
    </>
  );
};

export default One;
