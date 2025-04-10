import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// custom hook: sử dụng hook bên trong function
// quy ước đặt tên: use + tên function
export const useThemeContext = () => {
  const value = useContext(ThemeContext);

  return value;
};

function useSum(a, b) {
  useState();
  return a + b;
}

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  const value = {
    theme,
    setTheme,
  };

  return (
    <>
      <ThemeContext.Provider value={value}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}
