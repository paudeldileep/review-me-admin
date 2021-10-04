//for displaying total counts of users and products todo:products left to review


import { DatabaseIcon, TrendingUpIcon, UserGroupIcon,BadgeCheckIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { useFetchHelper } from "../../../utils/useFetchHelper";
import BasicLoader from "../../Utils/UI/BasicLoader";

const Counts = () => {
  const [response, setResponse] = useFetchHelper("admin/count");

  useEffect(() => {
    setResponse("admin/count");
  }, []);

  console.log(response);

  return (
    <div className="w-full h-auto flex flex-wrap items-center justify-between mx-2">
      <div className="h-32 w-48 mx-2 my-2 border border-gray-400 rounded shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105">
        {response.isLoading ? (
          <BasicLoader />
        ) : (
          <>
            <div className="flex items-center mt-2 mx-1 justify-center">
              <UserGroupIcon className="h-6 w-6 text-purple-500 mr-1" />
              <h2 className="text-xl font-bold">Active Users</h2>
            </div>
            <div className="flex items-center mt-2 mx-1 justify-center">
              <h4 className="text-lg font-bold">{response.data?.totalUsers}</h4>
              <TrendingUpIcon className="h-6 w-6 text-purple-500 mr-1" />
            </div>
          </>
        )}
      </div>
      <div className=" h-32 w-48 mx-2 my-2 border border-gray-400 rounded shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105">
        {response.isLoading ? (
          <BasicLoader />
        ) : (
          <>
            <div className="flex items-center mt-2 mx-1 justify-center">
              <DatabaseIcon className="h-6 w-6 text-purple-500 mr-1" />
              <h2 className="text-xl font-bold">Total Products</h2>
            </div>
            <div className="flex items-center mt-2 mx-1 justify-center">
              <h4 className="text-lg font-bold">{response.data?.totalProducts}</h4>
              <TrendingUpIcon className="h-6 w-6 text-purple-500 mr-1" />
            </div>
          </>
        )}
      </div>
      <div className=" h-32 w-48 mx-2 my-2 border border-gray-400 rounded shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105">
        {response.isLoading ? (
          <BasicLoader />
        ) : (
          <>
            <div className="flex items-center mt-2 mx-1 justify-center">
              <BadgeCheckIcon className="h-6 w-6 text-purple-500 mr-1" />
              <h2 className="text-xl font-bold">Featured</h2>
            </div>
            <div className="flex items-center mt-2 mx-1 justify-center">
              <h4 className="text-lg font-bold">1234</h4>
              <TrendingUpIcon className="h-6 w-6 text-purple-500 mr-1" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Counts;
