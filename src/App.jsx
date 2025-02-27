import { Header } from "./Header";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { Content } from "./Content";

function App() {
  return (
    <>
      <Header />

      <div className="content">
        <Navigation />

        <Content />
      </div>

      <Footer />
    </>
  );
}

export default App;
