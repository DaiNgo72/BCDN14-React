import { Routes, Route } from "react-router";
import { Watch } from "./pages/Watch";
import { MarketPlace } from "./pages/MarketPlace";
import { BaseTemplate } from "./templates/BaseTemplate";
import { GroupFeed } from "./pages/GroupFeed";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./templates/PrivateRoute";
import { Register } from "./pages/Register";
import { useState, createContext } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";

// Bước 1: tạo context để lưu giữa state
export const UserLoginContext = createContext();

// Global State của hình nên trang web của mình là: https://i.pravatar.cc/?u=1
// appBackgroundImage: https://i.pravatar.cc/?u=1

function App() {
  const [userLogin, setUserLogin] = useState({
    id: 1,
    username: "nguyen van b",
  });

  return (
    <>
      <ThemeProvider>
        {/* Bước 2: Bọc toàn bộ app của mình với UserLoginContext.Provider */}
        {/* Bước 3: Cung cấp dữ liệu mà UserLoginContext cần lưu giữ */}
        <UserLoginContext.Provider value={userLogin}>
          <Routes>
            {/* Page nhìn thấy đầu tiên khi vào trang web của mình */}
            {/* 1. */}
            {/* <Route path="/" Component={Home}></Route> */}
            {/* 2. */}
            {/* <Route path="" Component={Home}></Route> */}
            {/* 3. */}
            <Route index Component={Home}></Route>

            <Route path="home" Component={Home}></Route>

            {/* Setup những component có chung template */}
            {/* url: /watch */}
            {/* <Route Component={PrivateRoute}> */}
            <Route Component={BaseTemplate}>
              <Route path="watch" element={<Watch />}></Route>
              <Route path="marketplace" Component={MarketPlace}></Route>
              <Route path="groups/feed" Component={GroupFeed}></Route>
            </Route>
            {/* </Route> */}

            <Route path="login" Component={Login}></Route>
            <Route
              path="register"
              element={<Register userLogin={userLogin} />}
            ></Route>

            <Route path="bao/:id"></Route>

            {/* 
          - Wildcard: `*`
          This route will match any undefined paths and can be used for a 404 page.

          - hình dung:
          case default trong switch case
        */}
            <Route path="*" Component={NotFound}></Route>
          </Routes>
        </UserLoginContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
