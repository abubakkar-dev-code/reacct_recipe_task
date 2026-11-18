import React from "react";
import Logo from "../../assets/Navbar/logo/Logo";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { GiCook, GiFriedFish, GiMeal } from "react-icons/gi";
import { CgLogIn } from "react-icons/cg";

const Sidebar = ({ isDrawyerOpen, setIsDrawyerOpen }) => {
  const links = [
    { title: "Home", path: "/", icon: <MdSpaceDashboard /> },
    { title: "Recipes", path: "#", icon: <GiMeal /> },
    { title: "Ingredients", path: "#", icon: <GiFriedFish /> },
    { title: "Meal Plan", path: "#", icon: <GiCook /> },
  ];
  return (
    <div>
      <div className={`${isDrawyerOpen ? "" : "-ml-3"}`}>
        <Logo />
        <p className={`${isDrawyerOpen ? "" : "hidden"}`}>SmartChef</p>
      </div>
      <div
        className={`flex flex-col gap-20 mt-10 ${isDrawyerOpen ? "" : "mt-18 gap-20"}`}
      >
        {links.map((link) => (
          <div>
            <NavLink to={link.path} className="flex gap-5">
              <span className="inline-block text-xl">{link.icon}</span>
              <p className={`text-xl ${isDrawyerOpen ? "" : "hidden"}`}>
                {link.title}
              </p>
            </NavLink>
          </div>
        ))}
        <div className={`${isDrawyerOpen ? "flex gap-5" : ""}`}>
          <CgLogIn
            className={`text-2xl transition-transform duration-300 ease-in ${isDrawyerOpen ? "rotate-180" : ""}`}
            onClick={() => setIsDrawyerOpen((prev) => !prev)}
          />
          <span className="inline-block text-xl">
            {isDrawyerOpen ? "collapse" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
