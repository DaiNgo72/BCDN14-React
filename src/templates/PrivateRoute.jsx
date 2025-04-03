import { Navigate, Outlet, useLocation } from "react-router";

export function PrivateRoute() {
  const location = useLocation(); // ✅
  console.log(location);

  // Nếu như đã đăng nhập thì mới tiếp tục xem trang web
  // Chưa đăng nhập thì điều hướng người dùng về trang login

  // Nếu như trong localStorage chưa có từ khóa isLogin thì chứng tỏ người dùng chưa đăng nhập
  const isLogin = localStorage.getItem("isLogin");

  console.log("isLogin", isLogin, typeof isLogin);

  // Nếu như từ khóa isLogin chưa có hoặc parse ra giá trị false
  if (!isLogin || !JSON.parse(isLogin)) {
    // const location = useLocation(); // ❌
    // Biết được là người dùng đang muốn đến đang nào

    // điều hướng sang trang login nếu chưa login
    return <Navigate to={`/login?to=${location.pathname}&role=user&language=vi`} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
