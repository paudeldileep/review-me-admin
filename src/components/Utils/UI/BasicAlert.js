import React from "react";

const BasicAlert = (props) => {
  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-300 backdrop-filter backdrop-blur-md bg-opacity-60 absolute inset-0 z-10">
      <div className="h-32 w-72 mx-auto border-2 rounded-md flex flex-col justify-center border-purple-600 p-1">
        <h2 className="text-gray-700 mt-2">{props.title}</h2>
        <p className="my-2">{props.message}</p>
        <button onClick={props.hideModal}>OK</button>
      </div>
    </div>
  );
};

export default BasicAlert;
