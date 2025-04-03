import { useState } from "react";

function Error({ touches, errors, name }) {
  return (
    <>
      {touches[name] && errors[name] && (
        <span className="text-red-500">{errors[name]}</span>
      )}
    </>
  );
}

/**
 * Xử lý validate ở
 * - handleChange: chưa hiển thị error ở lần đầu gõ
 * - handleBlur: sau khi người dùng rời đi thì mới hiển thị error
 */

export function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    gender: "male",
    city: 0,
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    city: "",
  });

  const [touches, setTouches] = useState({
    username: false,
    email: false,

    phone: false,
    password: false,
    gender: false,
    city: false,
  });

  const handleChange = (event) => {
    const element = event.target;

    const { value, name } = element;

    setValues({
      ...values, // copy lại những giá trị cũ
      [name]: value, // cập nhật giá trị mới cho field thay đổi
    });

    handleValidate(value, name);
  };

  const handleBlur = (event) => {
    const element = event.target;

    const { name } = element;

    setTouches({
      ...touches,

      [name]: true,
    });

    // handleValidate(values[name], name);
  };

  const handleFocus = (event) => {};

  const handleValidate = (value, name) => {
    console.log(value, name);

    let error = "";

    switch (name) {
      case "username": {
        if (value.trim().length === 0) {
          error = "Không được để trống username";
        } else if (value.trim().length < 5) {
          error = "Không được nhập username ít hơn 5 ký tự";
        } else if (value.trim().length > 50) {
          error = "Không được nhập username nhiều hơn 50 ký tự";
        }
        break;
      }
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          error = "Không được để trống email";
        } else if (!emailRegex.test(value)) {
          error = "Email không hợp lệ";
        }
        break;
      }
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Điều kiện để có thể submit
    // phải đi qua hết tất cả các field
    const touchesArr = Object.values(touches);

    // Tất cả true thì mới true
    const isAllTouch = touchesArr.every((touch) => touch === true);

    if (isAllTouch === false) {
      return;
    }

    // không được có một error nào cả
    const errorsArr = Object.values(errors);

    const isAllNotError = errorsArr.every((error) => error.length === 0);
    if (isAllNotError === false) {
      return;
    }

    // Submit
    console.log(values);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Register</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* {touches.username && errors.username && (
              <span className="text-red-500">{errors.username}</span>
            )} */}

            <Error touches={touches} errors={errors} name={"username"} />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Error touches={touches} errors={errors} name={"email"} />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Error touches={touches} errors={errors} name={"phone"} />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Error touches={touches} errors={errors} name={"password"} />
          </div>

          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Gender</p>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-radio text-blue-500"
                checked={values.gender === "male"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-radio text-blue-500"
                checked={values.gender === "female"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="ml-2">Female</span>
            </label>

            <Error touches={touches} errors={errors} name={"gender"} />
          </div>

          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">City</p>
            <select
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              name="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={0}>Đà Nẵng</option>
              <option value={1}>Huế</option>
              <option value={2}>Sài Gòn</option>
            </select>

            <Error touches={touches} errors={errors} name={"city"} />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
