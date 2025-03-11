export function Card(props) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid black",
        borderRadius: 10,
        padding: "10px 20px",
      }}
    >
      <h2> {props.title} </h2>

      <p>Description</p>

      <div className="footer-card">
        <p>price: {props.price} </p>
        <button onClick={props.handleBuy}>Buy</button>
      </div>
    </div>
  );
}
