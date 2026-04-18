import "./one.css";

const One = () => {
  return (
    <>
      <header className="header">Sticky Header</header>

      <main className="content">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="box">
            Content Block {i + 1}
          </div>
        ))}
      </main>
    </>
  );
};

export default One;
