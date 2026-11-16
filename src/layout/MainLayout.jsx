import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="w-[82%] mx-auto mt-10">
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default MainLayout;
