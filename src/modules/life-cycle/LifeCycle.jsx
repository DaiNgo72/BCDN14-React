import { useState, useEffect } from "react";

export function LifeCycle() {
  const [c, setC] = useState(0);
  const [like, setLike] = useState(0);

  useEffect(() => {
    console.log("1. useEffect");
  });

  console.log("2. useEffect");

  useEffect(() => {
    console.log("mounted");
  }, []);

  useEffect(() => {
    console.log("thay đổi");
  }, [like]);

  return (
    <div>
      LifeCycle
      <br />
      <button
        onClick={() => {
          setC(c + 1);
        }}
        className="px-8 py-4 border rounded cursor-pointer"
      >
        {c}
      </button>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
        className="px-8 py-4 border rounded cursor-pointer"
      >
        Like: {like}
      </button>
    </div>
  );
}
