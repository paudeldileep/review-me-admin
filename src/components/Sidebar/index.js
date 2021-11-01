import React from "react";
import { NavLink } from "react-router-dom";
import { mainNavigationLinks } from "../../utils/navigation";

const Sidebar = ({ url }) => {
  return (
    <div className="w-full">
      {/* for large screen */}
      <div className="w-full hidden md:flex-col md:flex">
        {mainNavigationLinks.map((navLink) => (
          <NavLink
            to={`${url}/${navLink.href}`}
            key={navLink.name}
            className="ml-2 my-2 pl-2 py-1 w-32 text-left font-bold text-gray-500 rounded-md transform hover:scale-105 hover:text-gray-50"
            activeClassName="bg-gray-300 text-purple-600 shadow-md ring ring-offset-2 ring-purple-600"
          >
            {navLink.name}
          </NavLink>
        ))}
      </div>
      <div className="w-full flex flex-col md:hidden">
        {mainNavigationLinks.map((navLink) => (
          <NavLink
            to={`${url}/${navLink.href}`}
            key={navLink.name}
            className="my-2 mx-1 py-1 w-full text-center font-bold text-gray-500 hover:text-purple-500"
            activeClassName=" text-purple-600"
          >
            {navLink.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
