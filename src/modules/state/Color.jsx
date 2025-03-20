import { useState } from "react";

// ## Pesudo
const __useState = (defaultValue) => {
  let value =
    typeof defaultValue === "function" 
    ? defaultValue() 
    : defaultValue;

  const setValue = (newValue) => {
    value = newValue;
  };

  return [value, setValue];
};

// ## On tap destructuring
// let age = [1,2,3];
// let age1 = age[0]
// let age2 = age[1]
// let [age1, ,age3] = age;

export function Color() {
  let [bgc, setBgc] = useState("green");

  console.log(bgc);

  return (
    <>
      <div
        className="box"
        style={{
          width: 100,
          height: 100,

          backgroundColor: bgc,
        }}
      ></div>

      <button
        onClick={function () {
          setBgc("green");
        }}
      >
        green
      </button>

      <button
        onClick={() => {
          setBgc("red");
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          setBgc("black");
        }}
      >
        black
      </button>
    </>
  );
}

// function sum() {}

// const sum = function () {};

// const sum = (thamSo) => {  };
