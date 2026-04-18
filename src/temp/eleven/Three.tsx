import "./three.css";

export default function Three() {
  return (
    <div className="wrapper2">
      <div className="card2">
        {/* Desktop nested container */}
        <div className="media">
          <img src="https://static.toiimg.com/photo/imgsize-23456,msid-126555987/nobel-medal.jpg" alt="img" />
          <input type="checkbox" />
        </div>

        <h3 className="title">Card Title</h3>

        <p className="content">
          This is card content. It adapts using container queries.
        </p>

        <div className="actions">
          <button>Accept</button>
          <button>Reject</button>
        </div>

        <div className="footer">Footer info</div>
      </div>
    </div>
  );
}
