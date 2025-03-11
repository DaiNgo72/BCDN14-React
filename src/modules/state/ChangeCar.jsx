// Lấy đường dẫn của file
import { useState } from "react";
import redCar from "../../assets/red-car.jpg";

export function ChangeCar() {
  const [color, setColor] = useState("black");

  return (
    <>
      <img
        src={`/products/${color}-car.jpg`}
        alt=""
        width={200}
        style={{ objectFit: "cover" }}
      />

      {/* <img
        src={redCar}
        alt=""
        width={200}
        style={{ objectFit: "cover" }}
      /> */}

      <button
        onClick={() => {
          setColor("black");
        }}
      >
        <img
          src="/icons/icon-black.jpg"
          alt=""
          width={40}
          style={{ objectFit: "cover" }}
        />
      </button>

      <button
        onClick={() => {
          setColor("red");
        }}
      >
        <img
          src="/icons/icon-red.jpg"
          alt=""
          width={40}
          style={{ objectFit: "cover" }}
        />
      </button>

      <button
        onClick={() => {
          setColor("silver");
        }}
      >
        <img
          src="/icons/icon-silver.jpg"
          alt=""
          width={40}
          style={{ objectFit: "cover" }}
        />
      </button>

      <button
        onClick={() => {
          setColor("steel");
        }}
        style={{ userSelect: "none" }}
      >
        <img
          src="/icons/icon-steel.jpg"
          alt=""
          width={40}
          style={{ objectFit: "cover", userSelect: "none" }}
        />
      </button>
    </>
  );
}
