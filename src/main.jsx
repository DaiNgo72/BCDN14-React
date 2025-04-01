import ReactDOM from "react-dom/client";
import MyApp from "./App.jsx";

import { BrowserRouter } from "react-router";

import "./index.css";
/**
 * - kết nối với file html
 * - render app vào file html
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>
);
