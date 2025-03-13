// module css thì tạo ra tên class random
import css from "./v2.module.css";

import classnames from "classnames/bind";
const cx = classnames.bind(css);

console.log(css);
console.log(css.card);
console.log(css.button);

// rest parameters: lấy tất cả phần còn lại của parameters
function mergeClassNames(...cls) {
  return cls.join(" ");
}

mergeClassNames("1", "2", "card"); // 1. a = 1, b = 2 , rest = ["card"]
mergeClassNames("1", "2", "card", "bgc"); // a = 1, rest = ["2", "card", "bgc"]
mergeClassNames("1", "2", "card", "bgc", "box-shadow");

export function Card() {
  let loaded = true;
  return (
    // box-shadow bgc
    // <div className={css.card + " " + css["box-shadow"] + " " + css["bgc"]}>
    // <div className={`${css.card} ${css["box-shadow"]} ${css["bgc"]}`}>
    // <div className={mergeClassNames(css.card, css["box-shadow"], css["bgc"])}>
    <div
      className={cx("card", "box-shadow", {
        bgc: loaded,
      })}
    >
      <h1>Card v2</h1>
      <p>Card content v2</p>

      <div>
        <button>Buy</button>
        <button>Sell</button>
      </div>
    </div>
  );
}
