import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <div className="flex">
      <Sidebar isOpenSidebar={isOpenSidebar} />
      <main className="w-full p-6 bg-gray-100">
        <Header toggleSidebar={toggleSidebar} />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
