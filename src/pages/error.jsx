import { Button } from "@mui/material";
import ErrorImage from "../assets/images/error_image.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center w-full h-screen p-5">
      <div className="text-center">
        <h2 className="text-2xl mt-2">Page Not Found</h2>
        <p className="my-4">We couldn't find the page you are looking for.</p>
        <Button className="custom-btn" variant="contained" onClick={() => navigate("/login")}>
          Back to Home
        </Button>
        <div className="mt-8">
          <img src={ErrorImage} className="w-full" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Error;
