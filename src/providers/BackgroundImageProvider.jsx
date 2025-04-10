import { createContext, useContext, useState } from "react";

//#region setup
// b1: tạo context
const BackgroundImageContext = createContext();

export function BackgroundImageProvider({ children }) {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://i.pravatar.cc/?u=1"
  );

  const value = {
    backgroundImage,
    setBackgroundImage,
  };

  return (
    <>
      {/* b2: bọc context provider cho toàn bộ app */}

      {/* b3: gắn value để context này giữ để chia sẻ cho toàn bộ app */}
      <BackgroundImageContext.Provider value={value}>
        {children}
      </BackgroundImageContext.Provider>
    </>
  );
}
//#endregion

//#region usage
export const useBackgroundImageContext = () => {
  const value = useContext(BackgroundImageContext);

  return value;
};
//#endregion
