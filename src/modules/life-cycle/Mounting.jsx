// https://jsonplaceholder.typicode.com/todos?_limit=10

import { useEffect, useState } from "react";
import cx from "classnames";

// 1. ❌
// window.addEventListener('online', ()=> {
//     setStatusNetwork("online")
// })

export function Mounting() {
  const [todos, setTodos] = useState([]);
  const [statusNetwork, setStatusNetwork] = useState("online");

  const handleGetTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw "get todo error";
      })
      .then((response) => {
        console.log("response", response);

        setTodos(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // use case 1:
  useEffect(() => {
    handleGetTodos();
  }, []);

  /**
   * 2. ❌
   * mỗi lần re-render thì thêm mới sự kiện cho đối tượng window
   */
  // window.addEventListener("online", () => {
  //   setStatusNetwork("online");
  // });

  useEffect(() => {
    window.addEventListener("online", () => {
      setStatusNetwork("online");
    });

    window.addEventListener("offline", () => {
      setStatusNetwork("offline");
    });
  }, []);

  return (
    <>
      <p>Status network: {statusNetwork}</p>

      <button
        onClick={handleGetTodos}
        className="px-8 py-4 border rounded cursor-pointer"
      >
        get todo
      </button>

      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <p
              key={todo.id}
              className={cx({
                "line-through": todo.completed,
              })}
            >
              {todo.title}
            </p>
          );
        })}
    </>
  );
}
