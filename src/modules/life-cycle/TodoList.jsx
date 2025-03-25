import { Fragment } from "react";
import { useState, useEffect } from "react";

const BASE_URL = "https://67b732162bddacfb270e0e96.mockapi.io";

export function TodoList() {
  const [inputTodo, setInputTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);

  /**
   * Không cần thiết phải sử dụng useState
   */
  const listCompletedTodo = listTodo.filter((todo) => todo.completed);
  const listPendingTodo = listTodo.filter((todo) => !todo.completed);

  const handleChangeInputTodo = (event) => {
    setInputTodo(event.target.value);
  };

  const handleAddTodo = () => {
    fetch(`${BASE_URL}/Todos`, {
      method: "post",

      body: JSON.stringify({
        name: inputTodo,
        completed: false,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        alert("Thêm thành công.");
      } else {
        alert("Thêm thất bại !!!");
      }
    });

    // Fetch lại list todo mới để cập nhật UI
  };

  useEffect(() => {
    fetch(`${BASE_URL}/Todos`)
      .then((r) => {
        if (r.ok) {
          return r.json();
        }

        throw "get list todo error";
      })
      .then((r) => {
        setListTodo(r);

        /**
         * - Không cần thiết
         *
         * setListCompletedTask()
         * setListPendingTask()
         */
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Todo list</h1>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Add a new task"
            className="border border-gray-300 rounded-l px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // Chiều 1
            value={inputTodo}
            // Chiều 2
            onChange={handleChangeInputTodo}
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="todo bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Pending Tasks</h2>

            {/* 
                .map: 
                - nếu như mảng rỗng thì nó sẽ không duyệt qua phần tử nào hết
                - không lỗi
            */}
            {listPendingTodo.map((todo) => {
              return (
                <Fragment key={todo.id}>
                  <div className="todo-item flex justify-between items-center bg-gray-50 p-3 rounded mb-3">
                    <p>{todo.name}</p>
                    <div className="flex space-x-2">
                      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                        Complete
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>

          <div className="completed bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Completed Tasks</h2>

            {listCompletedTodo.map((todo) => {
              return (
                <Fragment key={todo.id}>
                  <div className="todo-item flex justify-between items-center bg-gray-50 p-3 rounded mb-3">
                    <p className="line-through">{todo.name}</p>
                    <div className="flex space-x-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                        Todo
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
