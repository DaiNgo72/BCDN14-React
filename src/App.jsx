import { useState } from "react";
import { LifeCycle } from "./modules/life-cycle/LifeCycle";
import { TodoList } from "./modules/life-cycle/TodoList";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <TodoList />
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        toggle
      </button>

      <div className="p-8 border">{show && <LifeCycle />}</div>
    </>
  );
}

export default App;
