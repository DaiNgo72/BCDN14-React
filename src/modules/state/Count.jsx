import { useState } from "react";

export function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className="p-4 border cursor-pointer"
        onClick={() => {
          // count = 0

          //   setCount(count + 1); // 1
          //   setCount(count + 1); // 1
          //   setCount(count + 1); // 1

          setCount((c) => { // c = 0
            return c + 1;
          });

          setCount((a) => { // a = 1
            return a + 1;
          });

          setCount((count) => { // count = 2
            return count + 1; // 3
          });
        }}
      >
        {count}
      </button>
    </>
  );
}
