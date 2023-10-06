import { Box, Button } from "@mui/material";
import VerifyImage from "../assets/images/verify_email.png";
import Logo from "../assets/icons/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/");
    toast.success("Verify email!")
  }
  return (
    <>
      <AuthLayout image={VerifyImage}>
        <div className="w-full">
          <img src={Logo} alt="logo" />
          <h5 className="font-medium mt-4 text-lg">Verify your email ✉️</h5>
          <p className="mb-5">
            Account activation link sent to your email address:
            hello@example.com Please follow the link inside to continue.
          </p>
          <Box className="mt-6">
            <Button className="w-full custom-btn" variant="contained" onClick={handleSkip}>
              Skip For Now
            </Button>
          </Box>

          <div className="text-center my-4">
            <p className="mb-0">
              Did not get the mail?
              <span>
                <NavLink
                  className="text-blue-500 ml-2"
                  to="/"
                  exact
                >
                  Resend
                </NavLink>
              </span>
            </p>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default VerifyEmail;
