import { useState } from "react";
import cx from "classnames";

function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        className="w-[400px] h-[400px] border relative overflow-hidden"
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          className="absolute"
        >
          <span
            className={cx(
              "w-[50px] h-[50px] bg-red-500 inline-block rounded-full",
              "-translate-x-1/2 -translate-y-1/2"
              // // runtime
              // `translate-x-[${position.x}px]`, // ❌
              // `translate-y-[${position.y}px]`, // ❌

              // // build-time
              // `translate-x-[100px]` // ✅
            )}
          ></span>
        </div>
      </div>
    </>
  );
}

export default App;
