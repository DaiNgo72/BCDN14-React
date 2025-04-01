import { Routes, Route } from "react-router";
import { Watch } from "./pages/Watch";
import { MarketPlace } from "./pages/MarketPlace";

function App() {
  return (
    <>
      <Routes>
        <Route path="watch" element={<Watch />}></Route>
        <Route path="marketplace" Component={MarketPlace}></Route>




      </Routes>
    </>
  );
}

export default App;
