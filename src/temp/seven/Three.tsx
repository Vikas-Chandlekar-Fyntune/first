import "./three.css";

const data = [{ name: "Mumbai" }, { name: "Pune" }, { name: "Delhi" }];

const One = () => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <div className="child" key={item.name}>
          {index === 0 && <div className="child-header">City Name</div>}
          <div className="child-content">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default One;
