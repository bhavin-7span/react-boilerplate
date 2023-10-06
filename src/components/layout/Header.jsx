import { Avatar, Menu, MenuItem } from "@mui/material";
import { MenuIcon } from "../icons/MenuIcon";
import { useState } from "react";

export default function Header({ toggleSidebar }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-md w-full px-10 h-16">
        <div>
          <MenuIcon
            className="w-8 h-8 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div>
          <Avatar
            className="cursor-pointer"
            sx={{ bgColoe: "#E5E7EB" }}
            onClick={handleClick}
          >
            A
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
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>
      </header>
    </>
  );
}
