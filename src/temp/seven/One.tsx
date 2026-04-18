import "./one.css";

const data = [
  {
    name: "Mumbai",
  },
  {
    name: "Pune",
  },
  {
    name: "Delhi",
  },
];

const One = () => {
  return (
    <div className="container">
      {data.map((item) => (
        <div className="child">{item.name}</div>
      ))}
    </div>
  );
};

export default One;
