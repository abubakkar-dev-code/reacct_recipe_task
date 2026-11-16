import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import profieImg from "../../assets/Navbar/glassesshop-man-9182458_1920.jpg"

const NavBar = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Recipes", path: "#" },
    { title: "Ingredients", path: "#" },
    { title: "Meal Plan", path: "#" },
  ];

  return (
    <div className="flex items-center justify-between border-b px-6 py-5">
      <div className="left flex items-center gap-12">
        <div>
          <img />
          <p className="text-2xl text-black font-bold">SmartChef</p>
        </div>
        <div className="flex gap-12">
          {links.map((link) => (
            <NavLink
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `font-bold ${isActive && link.path !== "#" ? "text-black" : "text-gray-600"
                }`
              }
              key={link.title}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="right flex items-center gap-6">
        <div className="w-62 py-2 px-2 rounded-lg bg-gray-100  flex justify-between items-center">
          <input placeholder="Enter to search" className="outline-none" />
          <CiSearch size={20} />
        </div>
        <div className="bg-gray-100 rounded-full p-4">
          <FaBookmark size={14} />
        </div>
        <img src={profieImg} className="w-10 h-10 rounded-full" />
      </div>
    </div>
  )
}

export default NavBar;
