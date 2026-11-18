import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  const [isDrawyerOpen, setIsDrawyerOpen] = useState(false);
  return (
    <div className="flex">
      <aside
        className={` ${isDrawyerOpen ? "w-[20%]" : "w-15"} border border-gray-300 p-4 transition-all duration-300`}
      >
        <Sidebar
          isDrawyerOpen={isDrawyerOpen}
          setIsDrawyerOpen={setIsDrawyerOpen}
        />
      </aside>
      <div className="w-[80%] flex-1">
        <header>
          <NavBar />
        </header>
        <main className="mt-10">
          <Outlet />
        </main>
        {/* <footer>Footer</footer> */}
      </div>
    </div>
  );
};

export default MainLayout;
