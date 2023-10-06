import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import LoginImage from "../assets/images/3d_login_image.png";
import Logo from "../assets/icons/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import AuthLayout from "../components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import Input from "../components/base/Input";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value) => {
    console.log("value", value);
    navigate("/");
  };

  return (
    <>
      <AuthLayout image={LoginImage}>
        <div className="w-full">
          <img src={Logo} alt="logo" />
          <h5 className="font-medium mt-4 text-lg">Welcome to Vuexy! 👋🏻</h5>
          <p className="mb-5">
            Please sign-in to your account and start the adventure
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              inputClassName="w-full"
              placeholder="Enter Your Email"
              label="Email"
              validate={register("email", {
                required: "Email is required",
              })}
              isError={errors.email}
              errorText={errors.email && { helperText: errors.email?.message }}
            />
            <Box className="my-4">
              <Input
                inputClassName="w-full"
                placeholder="Enter Your Password"
                label="Password"
                validate={register("password", {
                  required: "Password is required",
                })}
                isError={errors.password}
                errorText={
                  errors.password && { helperText: errors.password?.message }
                }
              />
            </Box>
            <Box className="my-4 flex justify-between items-center">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              <NavLink
                className="text-blue-500"
                activeClassName="is-active"
                to="/forgot-password"
                exact
              >
                Forgot Password?
              </NavLink>
            </Box>
            <Button
              className="w-full custom-btn"
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </form>
          <div className="text-center my-4">
            <p className="mb-0">
              New on our platform?
              <span>
                <NavLink
                  className="text-blue-500 ml-2"
                  activeClassName="is-active"
                  to="/register"
                  exact
                >
                  Create an account
                </NavLink>
              </span>
            </p>
            <Box className="my-4">
              <Divider>OR</Divider>
            </Box>
            <div className="mt-4">
              <IconButton aria-label="facebook" color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="google" color="error">
                <GoogleIcon />
              </IconButton>
              <IconButton aria-label="twitter" color="primary">
                <TwitterIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
