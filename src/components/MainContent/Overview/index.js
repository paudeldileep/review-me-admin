import React from "react";
import Counts from "./Counts";
import MonthlyPlot from "./MonthlyPlot";
import TopProducts from "./TopProducts";
import UsersOverview from "./UsersOverview";

const Overview = () => {
  return (
    <div className="w-full h-full">
      {/*  overview cards section */}
      <Counts />
      {/* chart div */}
      <div className="chart_div w-full mt-4 h-56 border border-gray-300 mr-4 rounded-md">
        <MonthlyPlot />
      </div>

      {/* info on top commented 2 products */}
      <div className="w-full h-auto mt-4 flex flex-wrap justify-between">
        {/* left section */}
        <div className="w-7/12 mx-2 border border-gray-300 rounded-md">
          <h2 className="text-left ml-4 my-2 text-purple-900 font-bold text-lg">
            Most Engaging
          </h2>
          <TopProducts />
        </div>
        {/* right section: users and products count*/}
        <div className="w-4/12 h-56 mx-2 border border-gray-300 rounded-md">
          <h2 className="text-left ml-1 my-1 text-purple-900 font-bold text-lg">
            Top Users
          </h2>
          <UsersOverview />
        </div>
      </div>
    </div>
  );
};

export default Overview;
