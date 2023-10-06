import { Box, Button } from "@mui/material";
import ResetPasswordImage from "../assets/images/reset_password.png";
import Logo from "../assets/icons/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import { LessThanIcon } from "../components/icons/LessThanIcon";
import { useForm } from "react-hook-form";
import Input from "../components/base/Input";

const ResetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (value) => {
    console.log("value", value);
    navigate("/login");
  };

  return (
    <>
      <AuthLayout image={ResetPasswordImage}>
        <div className="w-full">
          <img src={Logo} alt="logo" />
          <h5 className="font-medium mt-4 text-lg">Reset Password 🔒</h5>
          <p className="mb-5">for john.doe@email.com</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Input
                inputClassName="w-full"
                placeholder="Enter Your New Password"
                label="New Password"
                validate={register("password", {
                  required: "Password is required",
                })}
                isError={errors.password}
                errorText={
                  errors.password && { helperText: errors.password?.message }
                }
              />
            </Box>
            <Box className="mt-4">
              <Input
                inputClassName="w-full"
                placeholder="Enter Your Confirm Password"
                label="Confirm Password"
                validate={register("confirmPassword", {
                  required: "Confirm password is required",
                })}
                isError={errors.confirmPassword}
                errorText={
                  errors.confirmPassword && {
                    helperText: errors.confirmPassword?.message,
                  }
                }
              />
            </Box>
            <Box className="mt-6">
              <Button
                className="w-full custom-btn"
                variant="contained"
                type="submit"
              >
                Set New Password
              </Button>
            </Box>
          </form>

          <div className="text-center my-4">
            <NavLink
              className="text-blue-500 flex justify-center items-center"
              activeClassName="is-active"
              to="/login"
              exact
            >
              <LessThanIcon className="w-6 h-6 mr-2" /> Back to login
            </NavLink>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
