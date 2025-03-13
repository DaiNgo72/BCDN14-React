// module css thì tạo ra tên class random
import css from "./v2.module.css";

console.log(css);
console.log(css.card);
console.log(css.button);

export function Card() {
  return (
    <div className={css.card}>
      <h1>Card v2</h1>
      <p>Card content v2</p>

      <div>
        <button>Buy</button>
        <button>Sell</button>
      </div>
    </div>
  );
}
