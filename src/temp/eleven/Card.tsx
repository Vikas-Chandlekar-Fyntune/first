import "./card.css";

export default function Card() {
  return (
    <div className="wrapper1">
      <div className="card">
        <div className="media">
          <img
            src="https://static.toiimg.com/thumb/msid-126555821,imgsize-1201108,width-400,resizemode-4/untitled-design-97.jpg"
            alt="product"
          />
          <input type="checkbox" className="checkbox" />
        </div>

        <h3 className="title">Card Title</h3>

        <p className="content">
          This is some card content. It explains details about the product.
        </p>

        <div className="actions">
          <button>Primary</button>
          <button>Secondary</button>
        </div>
      </div>
    </div>
  );
}
