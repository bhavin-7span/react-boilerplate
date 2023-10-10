import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import Logo from "../../assets/icons/logo.svg";
import { UsersIcon } from "../icons/UsersIcon";

const Sidebar = ({ isOpenSidebar }) => {
  return (
    <>
      <div
        className={`h-screen shadow-md sticky top-0 ${
          isOpenSidebar
            ? "w-64 ease-in duration-150"
            : "w-20 overflow-hidden ease-in duration-150"
        }`}
      >
        <div className="flex justify-center items-center border-b shadow-md h-16">
          <h2 className="font-semibold text-lg flex items-center">
            <img src={Logo} className="mr-2" alt="logo" />
            {isOpenSidebar && "Admin"}
          </h2>
        </div>
        <ul className="mt-4 px-2">
          <li className="mt-2">
            <Tooltip
              title="User"
              placement="right-start"
              disableHoverListener={isOpenSidebar}
            >
              <span>
                <NavLink
                  className={({ isActive }) =>
                    `text-lg flex items-center hover:bg-gray-200 ${
                      isOpenSidebar ? "pl-6" : "justify-center"
                    } py-2 rounded-md hover:cursor-pointer ${
                      isActive ? "bg-gray-200" : ""
                    }`
                  }
                  to="/user"
                >
                  <UsersIcon className={`${isOpenSidebar && "mr-2"} h-6 w-6`} />
                  {isOpenSidebar && "User List"}
                </NavLink>
              </span>
            </Tooltip>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
