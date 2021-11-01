import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faCertificate,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  approveProduct,
  deleteProduct,
  setFeatured,
} from "../../../redux/productSlice";
import { useFetchHelper } from "../../../utils/useFetchHelper";
import { classNames } from "../../Utils/Helpers/helpers";
import BasicAlert from "../../Utils/UI/BasicAlert";
import BasicLoader from "../../Utils/UI/BasicLoader";

import { TimeAgo } from "../../Utils/UI/TimeAgo";

const ProductsList = (props) => {
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);

  const message = useSelector((state) => state.product.message);
  const error = useSelector((state) => state.product.error);
  // const status = useSelector((state) => state.product.status);
  const [allProducts, setAllProducts] = useFetchHelper("admin/all_pr");
  const [approvedProducts, setApprovedProducts] =
    useFetchHelper("admin/approved_pr");
  const [pendingProducts, setPendingProducts] =
    useFetchHelper("admin/pending_pr");

  const fetchData = () => {
    setAllProducts("admin/all_pr");
    setApprovedProducts("admin/approved_pr");
    setPendingProducts("admin/pending_pr");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    setShowAlert(true);
    setTimeout(fetchData, 1200);
  };

  const handleApprove = (productId) => {
    dispatch(approveProduct(productId));
    setShowAlert(true);
    setTimeout(fetchData, 1200);
  };

  const handleFeatured = (productId) => {
    dispatch(setFeatured(productId));
    setShowAlert(true);
    setTimeout(props.handleFeaturedUpdate, 1200);
    setTimeout(fetchData, 1200);
  };

  //console.log(message, error, status);
  // const AllProducts= response.data && response.data.filter(product=>product.isApproved)

  const allProductsRenderer =
    allProducts.data &&
    allProducts.data.map((product) => (
      <tr key={product._id} className="rounded-md py-1 bg-gray-300">
        <td className="p-1 text-purple-500 font-semibold text-lg">
          {product.title}
        </td>
        <td className="p-1">{product.description.substring(0, 50)}...</td>
        <td className="p-1">
          <img
            src={product.productImage}
            alt={product.title}
            className="h-8 w-8 rounded-lg"
          />
        </td>
        <td className="p-1 text-xs">
          <div>
            {" "}
            <h4>
              By:{product.postedBy.firstname} {product.postedBy.lastname}
            </h4>
            <p>
              posted:
              <TimeAgo timestamp={product.posted} />
            </p>
          </div>
        </td>
        <td className="p-1">
          <div className="flex justify-around flex-nowrap">
            {/* <button
              title="Approve"
              onClick={() => handleApprove(product._id)}
              className="mx-1"
            >
              <FontAwesomeIcon
                icon={faCheck}
                className="h-8 w-8 text-purple-500 transition-transform transform hover:scale-110"
              />
            </button> */}
            <button
              title="Delete"
              onClick={() => handleDelete(product._id)}
              className="mx-1"
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="h-8 w-8 text-red-500 transition-transform transform hover:scale-110"
              />
            </button>
            <button className="h-8 w-20 mx-1 text-gray-500 focus:text-gray-200 font-medium transition transform hover:scale-105 border-purple-500 bg-purple-200 focus:bg-purple-700">
              Details
            </button>
          </div>
        </td>
      </tr>
    ));

  //approved products
  const approvedProductsRenderer =
    approvedProducts.data &&
    approvedProducts.data.map((product) => (
      <tr key={product._id} className="rounded-md py-1 bg-gray-300">
        <td className="p-1 text-purple-500 font-semibold text-lg">
          {product.title}
        </td>
        <td className="p-1">{product.description.substring(0, 50)}...</td>
        <td className="p-1">
          <img
            src={product.productImage}
            alt={product.title}
            className="h-8 w-8 rounded-lg"
          />
        </td>
        <td className="p-1 text-xs">
          <div>
            {" "}
            <h4>
              By:{product.postedBy.firstname} {product.postedBy.lastname}
            </h4>
            <p>
              posted:
              <TimeAgo timestamp={product.posted} />
            </p>
          </div>
        </td>
        <td className="p-1">
          <div className="flex justify-around flex-nowrap">
            <button
              title={product.isFeatured ? "Remove Featured" : "Set Featured"}
              onClick={() => handleFeatured(product._id)}
              className="mx-1"
            >
              <FontAwesomeIcon
                icon={faCertificate}
                className={classNames(
                  "h-8 w-8",
                  product.isFeatured ? "text-purple-500" : "text-purple-300",
                  "transition-transform transform hover:scale-110"
                )}
              />
            </button>
            <button
              title="Delete"
              onClick={() => handleDelete(product._id)}
              className="mx-1"
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="h-8 w-8 text-red-500 transition-transform transform hover:scale-110"
              />
            </button>
            <button className="h-8 w-20 mx-1 text-gray-500 focus:text-gray-200 font-medium transition transform hover:scale-105 border-purple-500 bg-purple-200 focus:bg-purple-700">
              Details
            </button>
          </div>
        </td>
      </tr>
    ));

  //pending products
  const PendingProductsRenderer =
    pendingProducts.data &&
    pendingProducts.data.map((product) => (
      <tr key={product._id} className="rounded-md py-1 bg-gray-300">
        <td className="p-1 text-purple-500 font-semibold text-lg">
          {product.title}
        </td>
        <td className="p-1">{product.description.substring(0, 50)}...</td>
        <td className="p-1">
          <img
            src={product.productImage}
            alt={product.title}
            className="h-8 w-8 rounded-lg"
          />
        </td>
        <td className="p-1 text-xs">
          <div>
            {" "}
            <h4>
              By:{product.postedBy.firstname} {product.postedBy.lastname}
            </h4>
            <p>
              posted:
              <TimeAgo timestamp={product.posted} />
            </p>
          </div>
        </td>
        <td className="p-1">
          <div className="flex justify-around flex-nowrap">
            <button
              title="Approve"
              onClick={() => handleApprove(product._id)}
              className="mx-1"
            >
              <FontAwesomeIcon
                icon={faCheck}
                className="h-8 w-8 text-purple-500 transition-transform transform hover:scale-110"
              />
            </button>
            <button
              title="Delete"
              onClick={() => handleDelete(product._id)}
              className="mx-1"
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="h-8 w-8 text-red-500 transition-transform transform hover:scale-110"
              />
            </button>
            <button className="h-8 w-20 mx-1 text-gray-500 focus:text-gray-200 font-medium transition transform hover:scale-105 border-purple-500 bg-purple-200 focus:bg-purple-700">
              Details
            </button>
          </div>
        </td>
      </tr>
    ));

  const tabs = [
    { id: "1", title: "All Products" },
    { id: "2", title: "Approved" },
    { id: "3", title: "To Approve" },
  ];

  const handleModal = () => {
    setShowAlert(false);
  };

  return (
    <div className="mt-2 w-full mx-1 rounded-md shadow-md min-h-[300px]">
      {showAlert && (
        <BasicAlert
          title="Alert"
          message={message || error}
          hideModal={handleModal}
        />
      )}
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-4 bg-gradient-to-b from-gray-300 to-gray-500 rounded-md mb-1">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-purple-700 rounded-lg focus:outline-none focus:ring-1 ring-offset-1 ring-offset-purple-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-purple-200 shadow"
                    : "bg-gray-400 hover:bg-gray-300 hover:text-gray-600"
                )
              }
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="w-full">
            {allProducts.isLoading ? (
              <BasicLoader />
            ) : (
              <table className="w-full text-sm space-y-4">
                <thead className="my-1 p-1 bg-gray-400 rounded-md shadow-sm">
                  <tr>
                    <th className="p-1">Title</th>
                    <th className="p-1">Desc</th>
                    <th className="p-1">Image</th>
                    <th className="p-1">Remarks</th>
                    <th className="p-1">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 w-full">
                  {allProductsRenderer}
                </tbody>
              </table>
            )}
          </Tab.Panel>
          <Tab.Panel>
            {approvedProducts.isLoading ? (
              <BasicLoader />
            ) : (
              <table className="w-full text-sm space-y-4">
                <thead className="my-1 p-1 bg-gray-400 rounded-md shadow-sm">
                  <tr>
                    <th className="p-1">Title</th>
                    <th className="p-1">Desc</th>
                    <th className="p-1">Image</th>
                    <th className="p-1">Remarks</th>
                    <th className="p-1">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 w-full">
                  {approvedProductsRenderer}
                </tbody>
              </table>
            )}
          </Tab.Panel>
          <Tab.Panel>
            {pendingProducts.isLoading ? (
              <BasicLoader />
            ) : (
              <table className="w-full text-sm space-y-4">
                <thead className="my-1 p-1 bg-gray-400 rounded-md shadow-sm">
                  <tr>
                    <th className="p-1">Title</th>
                    <th className="p-1">Desc</th>
                    <th className="p-1">Image</th>
                    <th className="p-1">Remarks</th>
                    <th className="p-1">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 w-full">
                  {PendingProductsRenderer}
                </tbody>
              </table>
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProductsList;
