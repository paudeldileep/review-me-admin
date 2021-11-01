import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BasicLoader from "../Utils/UI/BasicLoader";

const Count = ({ isLoading, title, titleIcon, countValue, contentIcon }) => {
  return (
    <div>
      <div className="h-32 w-48 mx-2 my-2 border border-gray-400 rounded shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105">
        {isLoading ? (
          <BasicLoader />
        ) : (
          <>
            <div className="flex items-center mt-2 mx-1 justify-center">
              <FontAwesomeIcon
                icon={titleIcon}
                className="h-6 w-6 text-purple-800 mr-1"
              />
              <h2 className="text-xl font-bold text-purple-600">{title}</h2>
            </div>
            <div className="flex items-center mt-2 mx-1 justify-center">
              <h4 className="text-lg font-bold rounded-sm shadow-md px-2 text-gray-600">
                {countValue}
              </h4>
              {/* <FontAwesomeIcon icon={contentIcon} className="h-6 w-6 text-purple-500 ml-1" /> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Count;
