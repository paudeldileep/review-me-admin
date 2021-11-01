import React, { useEffect } from "react";
import { useFetchHelper } from "../../../utils/useFetchHelper";
import ProductsCount from "./ProductsCount";
import ProductsList from "./ProductsList";

const Products = () => {
  const [response, setResponse] = useFetchHelper("admin/count");

  useEffect(() => {
    setResponse("admin/count");
  }, []);

  const handleCountUpdate = () => {
    setResponse("admin/count");
  };

  return (
    <div className="w-full h-full">
      <ProductsCount response={response} />
      <ProductsList handleFeaturedUpdate={handleCountUpdate} />
    </div>
  );
};

export default Products;
