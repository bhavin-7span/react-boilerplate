import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { MenuIcon } from "../icons/MenuIcon";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({ toggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function AppTitle(props) {
    const [title, setTitle] = useState("");
    useEffect(() => {
      switch (props.pathname) {
        case "/user":
          setTitle("User");
          break;
        default:
          setTitle("User");
      }
    }, [props.pathname]);
    return (
      <Typography
        variant="h6"
        noWrap
        component="div"
        style={{
          flexGrow: 1,
          display: "block",
          fontFamily: "Figtree, sans-serif",
          fontSize: "24px",
        }}
      >
        {title}
      </Typography>
    );
  }

  return (
    <>
      <header className="flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-md w-full px-10 h-16">
        <div className="flex items-center">
          <MenuIcon
            className="w-8 h-8 cursor-pointer mr-4"
            onClick={toggleSidebar}
          />
          <AppTitle pathname={location.pathname} />
        </div>
        <div>
          <Avatar
            className="cursor-pointer"
            sx={{ bgColoe: "#E5E7EB" }}
            onClick={handleClick}
          >
            AB
          </Avatar>
          <Menu
            id="basic-menu"
            className="mt-1"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem onClick={() => navigate("/login")}>Logout</MenuItem>
          </Menu>
        </div>
      </header>
    </>
  );
}
