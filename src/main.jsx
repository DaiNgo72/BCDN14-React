import ReactDOM from "react-dom/client";
import MyApp from "./App.jsx";

import { BrowserRouter } from "react-router";

import "./index.css";
import { BackgroundImageProvider } from "./providers/BackgroundImageProvider.jsx";

// B2: kết nối react với reduxt
import { Provider } from "react-redux";
import { store } from "./store";
/**
 * - kết nối với file html
 * - render app vào file html
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <BackgroundImageProvider>
        <MyApp />
      </BackgroundImageProvider>
    </BrowserRouter>
  </Provider>
);
