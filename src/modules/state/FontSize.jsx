import { useState } from "react";

export function FontSize() {
  const [fz, setFz] = useState(16);

  const [isHidden, setIsHidden] = useState(false);

  //   const [visibility] = useState("hidden"); // 'visible'

  return (
    <>
      <button
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        {isHidden ? "Show" : "Hidden"}
      </button>

      {isHidden ? null : (
        <>
          <button
            onClick={() => {
              setFz(fz + 1);
            }}
          >
            +
          </button>

          <button
            onClick={() => {
              setFz(fz - 1);
            }}
          >
            -
          </button>
          <p
            style={{
              fontSize: fz,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            voluptatibus officia illum debitis rem voluptate reiciendis eum quae
            sed qui!
          </p>
        </>
      )}
    </>
  );
}
