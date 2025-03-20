import { useState } from "react";

export function Form() {
  const [login, setLogin] = useState({
    username: "daingo",
    password: "123456",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // lấy được giá trị người dùng input vào
    console.log(login);
  };

  const handleChange = (event) => {
    let text = event.target.value;
    let prop = event.target.name;

    setLogin({
      ...login,
      [prop]: text,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 p-4 bg-gray-100 rounded shadow-md"
      >
        <input
          // Đưa giá trị vào ô input (chiều 1)
          value={login.username}
          // Lấy dữ liệu từ ô input ra (chiều 2)
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
          className="p-2 border border-gray-300 rounded"
        />

        <input
          name="password"
          value={login.password}
          onChange={handleChange}
          placeholder="password"
          className="p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
}
