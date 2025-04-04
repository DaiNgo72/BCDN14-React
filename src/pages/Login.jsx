import { useNavigate, useSearchParams } from "react-router";

import { useFormik } from "formik";

export function Login() {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    getFieldProps,
  } = useFormik({
    // Khởi tạo các field của form các bạn cho formik biết
    initialValues: {
      username: "",
      password: "",
    },

    // Nơi return về state errors
    validate: (values) => {
      // return {
      //   username: "Không được bỏ trống",
      //   password: "Không được ít hơn 8 ký tự",
      // };

      return {};
    },

    // Khi submit thì sẽ gọi hàm này
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // getFieldProps("username")
  // => {
  //   name: "username",
  //   value: values.username,
  //   onBlur: handleBlur,
  //   onChange: handleChange
  // }

  const [searchParams] = useSearchParams();
  // console.log("to :::", searchParams.get("to"));
  const to = searchParams.get("to");

  // Step 1: lấy function navigate
  const navigate = useNavigate();

  const onSubmit = (event) => {
    // Chặn reload trang web do thẻ form gây ra
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);

    if (data.username === "cyber" && data.password === "cyber") {
      // Lưu vào localStorage để thể hiện người dùng đã login thành công
      // localStrorage (5MB) khi reload trang web không bị mất giá trị
      localStorage.setItem("isLogin", true);

      if (to) {
        navigate(to);
      } else {
        // nhảy sang trang home
        navigate("/home"); // Step 2: nhảy đến đường dẫn mình mong muốn.
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username:
            </label>
            <input
              // value={values.username}
              // onBlur={handleBlur}
              // onChange={handleChange}
              // name="username"
              {...getFieldProps("username")}
              // ---
              type="text"
              id="username"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password:
            </label>
            <input
              {...getFieldProps("password")}
              // ---
              type="password"
              id="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
