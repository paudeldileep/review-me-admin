import React from "react";
import { useEffect } from "react";
import { useFetchHelper } from "../../../utils/useFetchHelper";
import BasicLoader from "../../Utils/UI/BasicLoader";

const ProductsList = () => {
  const [response, setResponse] = useFetchHelper("admin/all_pr");

  useEffect(() => {
    setResponse("admin/all_pr");
  }, []);

  // const AllProducts= response.data && response.data.filter(product=>product.isApproved)

  const allProductsRenderer =
    response.data &&
    response.data.map((product) => (
      <tr key={product._id}>
        <td>{product.title}</td>
      </tr>
    ));

  console.log(response);
  return (
    <div className="mt-2 w-full mx-1 px-1 py-2 rounded-md shadow-md">
      {response.isLoading ? (
        <BasicLoader />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>{allProductsRenderer}</tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsList;
