import React from "react";
import { Outlet } from "react-router-dom";
import Navbar1 from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar1 />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
