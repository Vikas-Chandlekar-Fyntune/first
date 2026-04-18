import "./two.css";

const data = [{ name: "Mumbai" }, { name: "Pune" }, { name: "Delhi" }];

const Two = () => {
  return (
    <div className="container">
      <div className="group-label">City Name</div>

      {data.map((item) => (
        <div key={item.name} className="child">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Two;
