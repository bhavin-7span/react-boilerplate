import { useRoutes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";
import VerifyEmail from "./pages/verifyEmail";
import ResetPassword from "./pages/resetPassword";
import UserList from "./pages/userList";
import Error from "./pages/error";
import DashboardLayout from "./components/layout/DashboardLayout";

const Router = () => {
  const isLoggedIn = localStorage.getItem("accessToken");
  const routes = [
    {
      path: "/",
      element: !isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { path: "", element: <UserList /> },
        { path: "user", element: <UserList /> },
      ],
    },
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/verify-email",
      element: <VerifyEmail />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/*",
      element: <Error />,
    },
  ];
  const router = useRoutes(routes);

  return <>{router}</>;
  // return (
  //   <Routes>
  //     <Route path="/" element={<Login />} />
  //     <Route path="login" element={<Login />} />
  //     <Route path="register" element={<Register />} />
  //     <Route path="forgot-password" element={<ForgotPassword />} />
  //     <Route path="verify-email" element={<VerifyEmail />} />
  //     <Route path="reset-password" element={<ResetPassword />} />
  //     <Route path="*" element={<Error />} />
  //   </Routes>
  // );
};

export default Router;
