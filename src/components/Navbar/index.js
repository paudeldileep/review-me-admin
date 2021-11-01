import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { classNames } from "../../utils/classnames";
import {
  BellIcon,
  CogIcon,
  LogoutIcon,
  MenuIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { mainNavigationLinks } from "../../utils/navigation";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminSignOut, selectAdminData } from "../../redux/adminSlice";

const Navbar = ({ url }) => {
  const admin = useSelector(selectAdminData);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(adminSignOut());
  };

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
              <div className="right_div flex realtive">
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
                          {admin?.photo ? (
                            <img
                              className="h-6 w-6 rounded-full"
                              src={admin?.photo}
                              alt={admin.name}
                            />
                          ) : (
                            <UserIcon className="h-6 w-6 text-purple-600" />
                          )}
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
                                  active ? "bg-gray-100" : "",
                                  "px-4 py-2 text-sm text-gray-700 w-full block"
                                )}
                              >
                                <p className="flex items-center justify-start">
                                  <CogIcon className="h-5 w-5 text-purple-400 mr-1" />
                                  <span>Settings</span>
                                </p>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                )}
                                onClick={handleSignOut}
                              >
                                <p className="flex items-center justify-start">
                                  <LogoutIcon className="h-5 w-5 text-red-400 mr-1" />
                                  <span>Sign Out</span>
                                </p>
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

                {/* menuicon for mobile menu */}
                <div className="mr-2 md:hidden">
                  <Disclosure.Button className="bg-gray-600 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            {/* mobile menu items */}
            <Disclosure.Panel className="md:hidden bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-30 py-2">
              {/* main nav links */}
              <div className="pt-2 px-2 space-y-1 w-full">
                {mainNavigationLinks.map((navLink) => (
                  <NavLink
                    to={`${url}/${navLink.href}`}
                    key={navLink.name}
                    className=" block px-1 py-2 w-full text-center font-bold text-gray-500 hover:text-gray-50"
                    activeClassName="bg-gray-400 text-purple-800 shadow-md border-b-4 border-purple-600"
                  >
                    {navLink.name}
                  </NavLink>
                ))}
              </div>
              <div className="w-full mt-4 mb-2">
                <div className="flex justify-between w-11/12 m-auto">
                  <div className="flex">
                    <div>
                      {admin?.photo ? (
                        <img
                          className="h-6 w-6 rounded-full"
                          src={admin?.photo}
                          alt={admin.name}
                        />
                      ) : (
                        <UserIcon className="h-8 w-8 text-purple-600 rounded-full bg-gray-400 p-1" />
                      )}
                    </div>
                    <span className="ml-2">{admin?.name}</span>
                  </div>
                  <div>
                    {/* notification button */}
                    <button
                      type="button"
                      className="bg-gray-400 p-1 rounded-full text-gray-600 hover:text-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6 transform focus:scale-105" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-11/12 m-auto">
                <Link to={``}>
                  <p className="flex items-center justify-start">
                    <CogIcon className="h-5 w-5 text-purple-400 mr-1" />
                    <span>Settings</span>
                  </p>
                </Link>
                <button className="mt-2">
                  <p className="flex items-center justify-start">
                    <LogoutIcon className="h-5 w-5 text-red-400 mr-1" />
                    <span>Sign Out</span>
                  </p>
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
