// # Old
// export function BaseTemplate(props) {
// const children = props.children

import cn from "classnames";
import { Link, NavLink, Outlet } from "react-router";
import { useThemeContext } from "../providers/ThemeProvider";

// # New
// Destructuring
export function BaseTemplate({ children }) {
  const { theme, setTheme } = useThemeContext();

  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Facebook</h1>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
          >
            Toggle
          </button>
        </div>

        <nav className="mt-2 flex space-x-4">
          <NavLink
            to="/watch"
            className={(props) =>
              props.isActive
                ? "text-red-500 underline"
                : "text-white hover:underline"
            }
          >
            Watch
          </NavLink>

          <Link to="/marketplace" className="text-white hover:underline">
            Marketplace
          </Link>

          <Link to="/groups/feed" className="text-white hover:underline">
            GroupFeed
          </Link>
        </nav>
      </header>

      {/* {children} */}

      {/* Outlet: Điền vị trị của route con trong template dùng chung */}
      <Outlet />

      <footer
        className={cn(
          "text-white p-4 text-center",
          theme === "dark" ? "bg-black" : "bg-blue-500"
        )}
      >
        Footer Facebook
      </footer>
    </>
  );
}
