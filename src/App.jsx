import { Button } from "./modules/props/Button";
import { Card } from "./modules/props/Card";
// shift + alt + o: để xóa những file import thừa
function App() {
  const handleBuy = () => {
    // thuc thi function nay

    console.log("buy");
  };

  return (
    <>
      <Card
        title="Sam Sung"
        price="100"
        handleBuy={handleBuy}
      />

      {/* <Card title="Iphone" price="200" /> */}

      <Button
        onClick={() => {
          console.log("click 1");
        }}
        className="button"
        style={{
          backgroundColor: "red",
          color: "white",
          fontSize: 20,
        }}
      >
        Click 1
      </Button>

      <Button
        style={{
          backgroundColor: "green",
          color: "white",
        }}
      >
        Click 2
      </Button>
      <Button
        style={{
          backgroundColor: "yellow",
          color: "black",
        }}
      >
        Click 3
      </Button>
    </>
  );
}

export default App;
