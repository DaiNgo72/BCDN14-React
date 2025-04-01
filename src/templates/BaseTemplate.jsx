// # Old
// export function BaseTemplate(props) {
// const children = props.children

import { Outlet, Link, NavLink } from "react-router";

// # New
// Destructuring
export function BaseTemplate({ children }) {
  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Facebook</h1>

        <nav className="mt-2">
          <NavLink
            // 2. Style Inline với props style khi có thẻ liên kết được active
            // style={(props) => {
            //   return {
            //     color: props.isActive ? "red" : "blue",
            //   };
            // }}
            to="/watch"
            // 3. ClassName
            className={(props) => {
              return props.isActive
                ? "text-red-500 underline"
                : "text-white hover:underline";
            }}
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

      <footer className="bg-gray-800 text-white p-4 text-center">
        Footer Facebook
      </footer>
    </>
  );
}
