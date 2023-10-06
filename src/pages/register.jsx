import AuthLayout from "../components/layout/AuthLayout";
import RegisterImage from "../assets/images/register.png";
import Logo from "../assets/icons/logo.svg";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useForm } from "react-hook-form";
import Input from "../components/base/Input";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (value) => {
    console.log("value", value);
  };

  return (
    <AuthLayout image={RegisterImage}>
      <div className="w-full">
        <img src={Logo} alt="logo" />
        <h5 className="font-medium mt-4 text-lg">Adventure starts here 🚀</h5>
        <p className="mb-5">Make your app management easy and fun!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputClassName="w-full"
            placeholder="Enter Your Username"
            label="Username"
            validate={register("userName", {
              required: "User name is required",
            })}
            isError={errors.userName}
            errorText={
              errors.userName && { helperText: errors.userName?.message }
            }
          />
          <Box className="my-4">
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
          </Box>
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
              label="I agree to
            privacy policy & terms"
            />
          </Box>
          <Button
            className="w-full custom-btn"
            variant="contained"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <div className="text-center my-4">
          <p className="mb-0">
            Already have an account?
            <span>
              <NavLink
                className="text-blue-500 ml-2"
                activeClassName="is-active"
                to="/register"
                exact
              >
                Sign in instead
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
  );
};

export default Register;
