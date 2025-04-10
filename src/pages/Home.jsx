import { useThemeContext } from "../providers/ThemeProvider";

// Alt + shift + o: xóa những import dư thừa
export function Home() {
  const value = useThemeContext();

  console.log(value);
  console.log(value.theme);

  return (
    <>
      <h1
        className={
          value.theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }
      >
        Home Page
      </h1>
    </>
  );
}
