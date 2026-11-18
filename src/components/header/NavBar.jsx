import { CiSearch } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import profieImg from "../../assets/Navbar/glassesshop-man-9182458_1920.jpg";
import Logo from "../../assets/Navbar/logo/Logo";

const NavBar = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Recipes", path: "#" },
    { title: "Ingredients", path: "#" },
    { title: "Meal Plan", path: "#" },
  ];

  return (
    <div className="px-4 py-1 sm:px-6 sm:py-5 shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-y-2">
        <Logo/>
        <p className="order-1 shrink-0 text-xl font-bold text-black sm:text-2xl">
          SmartChef
        </p>

        <div className="order-2 ml-auto flex items-center gap-2 sm:gap-4">
          <label className="flex h-10 w-24 items-center gap-1 rounded-full bg-gray-100 px-2.5 sm:w-48 sm:gap-2 sm:px-3 lg:w-64">
            <CiSearch aria-hidden="true" className="shrink-0 text-gray-500" size={20} />
            <span className="sr-only">Search recipes</span>
            <input
              aria-label="Search recipes"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500"
              placeholder="Search"
              type="search"
            />
          </label>
          <button
            aria-label="Saved recipes"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100"
            type="button"
          >
            <FaBookmark aria-hidden="true" size={14} />
          </button>
          <img
            alt="Profile"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
            src={profieImg}
          />
        </div>

        <nav
          aria-label="Main navigation"
          className="order-3 flex w-full items-center gap-6 overflow-x-auto whitespace-nowrap pb-1 lg:order-1 lg:ml-10 lg:w-auto lg:flex-1 lg:gap-8"
        >
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `shrink-0 font-bold ${isActive && link.path !== "#" ? "text-black" : "text-gray-600"
                }`
              }
              end={link.path === "/"}
              key={link.title}
              to={link.path}
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
