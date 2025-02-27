import { Card } from "./Card";

export function BindingData() {
  let fullName = "Nguyen Van A";
  let age = 20;
  let nums = [1, 2, 3, 4];
  let card = <Card />;

  // Được phép, không thị lên trên giao diện
  let isOpen = true;
  let node = null;
  let product = undefined;

  // Không được phép binding object lên giao diện ❌
  let sv = {
    name: fullName,
    age,
  };

  function hello() {
    return 10
  }

  return (
    <>
      { hello() }


      {card}
      {/* Đưa giá trị của biến fullName lên trên giao diện */}
      <p> Nguyen Van A </p>
      20
      <p className="isOpen">{isOpen}</p>
      <p className="node">{node}</p>
      <p className="product">{product}</p>
      <p className="nums">{nums}</p>
      {/* <p className="sv">{sv}</p> */}
      <p className="age"> {sv.age} </p>
    </>
  );
}
