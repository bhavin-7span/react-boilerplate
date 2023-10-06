import { Grid } from "@mui/material";

const AuthLayout = (props) => {
  const { image, children } = props;
  return (
    <Grid
      container
      className="h-screen"
    >
      <Grid item xs={12} md={8} className="hidden md:block p-8 pr-0 ">
        <div className="flex items-center justify-center bg-gray-50 rounded-lg h-full">
          <div className="max-w-md max-h-md">
            <img src={image} className="w-full" alt="img" />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={4} className="p-8 flex items-center">
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
