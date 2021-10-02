import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { classNames } from "../../utils/classnames";
import { BellIcon, MenuIcon, UserIcon, XIcon } from "@heroicons/react/outline";
import { mainNavigationLinks } from "../../utils/navigation";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAdminData } from "../../redux/adminSlice";

const Navbar = ({ url }) => {

    const admin=useSelector(selectAdminData);

  return (
    <div className="w-full h-full">
      <Disclosure as="nav" className="bg-gray-300 h-full">
        {({ open }) => (
          <>
            {/* main div with left and right div */}
            <div className="container_div h-full flex justify-between items-center mx-2">
              {/* left area div for logo*/}
              <div className="left_div">
                <h1>Admin</h1>
              </div>

              {/*right div for menu  */}
              <div className="right_div flex">
                {/* navigation for large screen hidden in small screen */}
                <div className="navigation_menu hidden md:block mr-10">
                  <div className="flex items-center justify-around">
                    {mainNavigationLinks.map((navLink) => (
                      <NavLink
                        to={`${url}/${navLink.href}`}
                        key={navLink.name}
                        className="mx-1 px-1 py-1 w-20 text-center font-bold text-gray-500 transform hover:scale-105 hover:text-gray-50"
                        activeClassName="bg-gray-300 text-purple-600 shadow-md border-b-4 border-purple-600"
                      >
                        {navLink.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                 {/* user related menu */}
                 <div className="hidden md:block">
                  <div className="ml-4 flex items-center">
                    {/* notification button */}
                    <button
                      type="button"
                      className="bg-gray-400 p-1 rounded-full text-gray-600 hover:text-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6 transform focus:scale-105" />
                    </button>

                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs h-8 w-8 bg-gray-400 rounded-full flex items-center justify-center text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          {admin.photo ?<img className="h-6 w-6 rounded-full" src={admin?.photo} alt={admin.name} /> : <UserIcon className="h-6 w-6 text-purple-600"/>}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={``}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Settings
                                </Link>
                              )}
                            </Menu.Item>
                        
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
               
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
