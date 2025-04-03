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

function App() {
  return (
    <>
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
        <Route Component={PrivateRoute}>
          <Route Component={BaseTemplate}>
            <Route path="watch" element={<Watch />}></Route>
            <Route path="marketplace" Component={MarketPlace}></Route>
            <Route path="groups/feed" Component={GroupFeed}></Route>
          </Route>
        </Route>

        <Route path="login" Component={Login}></Route>
        <Route path="register" Component={Register}></Route>

        <Route path="bao/:id"></Route>

        {/* 
          - Wildcard: `*`
          This route will match any undefined paths and can be used for a 404 page.

          - hình dung:
          case default trong switch case
        */}
        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </>
  );
}

export default App;
