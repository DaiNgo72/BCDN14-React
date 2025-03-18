/**
 * props:
 * - data: list cart
 */
export function Cart(props) {
  //   let sum = 0;

  //   props.data.forEach((product) => {
  //     sum += product.soLuong;
  //   });

  let sum = props.data.reduce((sum, product) => {
    return sum + product.soLuong;
  }, 0);

  return (
    <>
      <button className="p-2 border rounded-sm cursor-pointer">
        Giỏ hàng ({sum})
      </button>
    </>
  );
}

// .map =>
// .reduce => 1 giá trị

let arr = [{ value: 1 }, { value: 2 }, { value: 6 }];
// -> 9

// c1
let sum = 100;

for (let i = 0; i < arr.length; i++) {
  // i:0, sum = 100, item = {value: 1}
  // i:1, sum = 101, item = {value: 2}
  // i:2, sum = 103, item = {value: 5}

  sum += arr[i].value;

  // i:0, sum = 101
  // i:1, sum = 103
  // i:2, sum = 108
}

// -- nhan duoc ket qua sum
//

// c2
let sum2 = arr.reduce((total, item, index) => {
  // index = 0; total = 100; item={value:1}
  // index = 1; total = 101; item={value: 2}
  // index = 2; total = 103; item={value: 6}
  return total + item.value; // 109
}, 100);

console.log(sum2);
