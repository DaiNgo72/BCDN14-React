import { Fragment } from "react";
import { useState, useEffect, useRef } from "react";
import { Loading } from "./Loading";

const BASE_URL = "https://67b732162bddacfb270e0e96.mockapi.io";

export function TodoList() {
  const [inputTodo, setInputTodo] = useState("");
  // inputTodo = ""

  const [listTodo, setListTodo] = useState([]);

  // step 1: Tạo một biến để trỏ đến element
  const inputRef = useRef();

  // fetching, success, fail, idle
  /**
   * fetching: đang gọi api
   * success: gọi thành công
   * fail: gọi thất bại
   * idle: chưa làm gì hết
   */
  const [fetchStatus, setFetchStatus] = useState("idle");

  const [todoEdit, setTodoEdit] = useState(null);

  /**
   * Không cần thiết phải sử dụng useState
   */
  const listCompletedTodo = listTodo.filter((todo) => todo.completed);
  const listPendingTodo = listTodo.filter((todo) => !todo.completed);

  const handleChangeInputTodo = (event) => {
    setInputTodo(event.target.value);
  };

  const handleAddTodo = () => {
    setFetchStatus("fetching");

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
        setFetchStatus("success");

        // Sau khi add thành công thì cập nhật lại giá trị của input thành rỗng
        setInputTodo("");

        // Focus lại ô input sau khi thêm thành công.
        inputRef.current.focus();

        // Fetch lại list todo mới để cập nhật UI
        getListTodo();
      } else {
        setFetchStatus("fail");
      }
    });
  };

  const getListTodo = () => {
    setFetchStatus("fetching");
    fetch(`${BASE_URL}/Todos`)
      .then((r) => {
        if (r.ok) {
          setFetchStatus("success");
          return r.json();
        }

        setFetchStatus("fail");
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
  };

  const handleDeleteTodo = (id) => {
    setFetchStatus("fetching");

    fetch(`${BASE_URL}/Todos/${id}`, {
      method: "delete",
    }).then((r) => {
      if (r.ok) {
        setFetchStatus("success");
        getListTodo();
      } else {
        setFetchStatus("fail");
      }
    });
  };

  const handleCompleteTodo = (id) => {
    setFetchStatus("fetching");

    fetch(`${BASE_URL}/Todos/${id}`, {
      method: "put",

      body: JSON.stringify({
        completed: true,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        setFetchStatus("success");
        getListTodo();
      } else {
        setFetchStatus("fail");
        alert("Cập nhật thất bại.");
      }
    });
  };

  const handlePendingTodo = (id) => {
    setFetchStatus("fetching");

    fetch(`${BASE_URL}/Todos/${id}`, {
      method: "put",

      body: JSON.stringify({
        completed: false,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        setFetchStatus("success");
        getListTodo();
      } else {
        setFetchStatus("fail");
        alert("Cập nhật thất bại.");
      }
    });
  };

  const handleEditTodo = (todo) => {
    setInputTodo(todo.name);

    setTodoEdit(todo);
  };

  const handleUpdateTodo = () => {
    setFetchStatus("fetching");

    fetch(`${BASE_URL}/Todos/${todoEdit.id}`, {
      method: "put",

      body: JSON.stringify({
        name: inputTodo,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        setFetchStatus("success");

        setTodoEdit(null);
        setInputTodo(""); // re-render
        // inputTodo // chưa bị reset

        // C1: chậm, request network để get list mới
        // getListTodo();

        // C2: thay đổi trực tiếp mảng listTodo
        // Deep clone
        const cloneListTodo = JSON.parse(JSON.stringify(listTodo));

        const findTodo = cloneListTodo.find((todo) => {
          return todo.id === todoEdit.id;
        });

        if (findTodo) {
          // Cập nhật name của todo tìm kiếm được bằng input người dùng nhập vào
          findTodo.name = inputTodo;

          // Cập nhật lại list todo
          setListTodo(cloneListTodo);
        }

        // 1 lần re-render - batching state
        // inputTodo => ""
        // setListTodo => cloneListTodo
      } else {
        setFetchStatus("fail");
      }
    });
  };

  useEffect(() => {
    getListTodo();
  }, []);

  useEffect(() => {
    console.log("inputRef", inputRef);
  }, []);

  return (
    <>
      {fetchStatus === "fetching" && (
        <div className="absolute inset-0 bg-[#8080805d]">
          <Loading />
        </div>
      )}

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
            // step 2: truyền biến lưu trữ ref vào cho thuộc tính ref của element mà mình muốn lấy
            ref={inputRef}
          />
          <button
            onClick={todoEdit ? handleUpdateTodo : handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            {todoEdit ? "Update" : "Add"}
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
                  <div
                    onClick={() => {
                      // console.log("update");
                      handleEditTodo(todo);
                    }}
                    className="todo-item flex justify-between items-center bg-gray-50 p-3 rounded mb-3"
                  >
                    <p>{todo.name}</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={(event) => {
                          // Chặn lại sự kiện lan truyền event bubbling
                          event.stopPropagation();
                          // console.log("complete");

                          handleCompleteTodo(todo.id);
                        }}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Complete
                      </button>
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          
                          handleDeleteTodo(todo.id);
                        }}
                        // onClick={handleDeleteTodo(todo.id)} // ❌ sai
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
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
                      <button
                        onClick={() => {
                          handlePendingTodo(todo.id);
                        }}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Todo
                      </button>
                      <button
                        onClick={() => {
                          handleDeleteTodo(todo.id);
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
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
