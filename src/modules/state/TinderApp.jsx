import { useState } from "react";

export function TinderApp() {
  const [src, setSrc] = useState("https://i.pravatar.cc?u=1");
  const [loaded, setLoaded] = useState(false);

  const handleRandomImage = () => {
    const u = Math.floor(Math.random() * 70);

    setSrc(`https://i.pravatar.cc?u=${u}`);

    setLoaded(false);
  };

  const handleLoadImage = () => {
    setLoaded(true);
  };

  return (
    <>
      <div>
        <img
          onLoad={handleLoadImage}
          src={src}
          width={200}
          style={{
            opacity: loaded ? "1" : "0.5",
          }}
        />

        <button onClick={handleRandomImage}>Like</button>
        <button onClick={handleRandomImage}>Dislike</button>
      </div>
    </>
  );
}
