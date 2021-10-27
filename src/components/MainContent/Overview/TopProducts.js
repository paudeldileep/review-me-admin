import React, { useEffect } from "react";
import { useFetchHelper } from "../../../utils/useFetchHelper";
import BasicLoader from "../../Utils/UI/BasicLoader";

const TopProducts = () => {
  const [response, setResponse] = useFetchHelper("admin/top_pr");

  useEffect(() => {
    setResponse("admin/top_pr");
  }, []);

  console.log(response);

  return (
    <>
      {response.isLoading ? (
        <BasicLoader />
      ) : (
        <div className="w-full h-auto flex flex-wrap items-center justify-between px-2">
          {response.data?.map((res) => (
            <div
              key={res._id}
              className="h-32 w-48 mx-2 my-2 p-1 border border-gray-400 rounded shadow-sm relative transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={res.image}
                alt={res.title}
                className="absolute top-0 h-full w-full opacity-30"
              />
              <h2 className="font-bold text-purple-900">{res.title}</h2>
              <h4 className="text-xs italic">Reviews: {res.count}</h4>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TopProducts;
