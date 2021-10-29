import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useFetchHelper } from '../../../utils/useFetchHelper';
import BasicLoader from '../../Utils/UI/BasicLoader';
import { TimeAgo } from '../../Utils/UI/TimeAgo';

const UserList = () => {
    const [response, setResponse] = useFetchHelper("admin/users");

  useEffect(() => {
    setResponse("admin/users");
  }, []);

  // const AllProducts= response.data && response.data.filter(product=>product.isApproved)
  console.log(response)
  const allProductsRenderer =
    response.data &&
    response.data.map((user,index) => (
      <tr key={user._id} className="rounded-md py-1 bg-gray-300">
        <td className="p-1 text-purple-500 font-semibold text-lg">{index+1}</td>
        <td className="p-1 ">{user.firstname}</td>
        <td className="p-1">
          {/* <img
            src={product.productImage}
            alt={product.title}
            className="h-8 w-8 rounded-lg"
          /> */}
          user image
        </td>
        <td className="p-1 text-xs">
          <div>
           
            <h4>
            <TimeAgo timestamp={user.created} />
            </h4>
            
          </div>
        </td>
        <td className="p-1">
            <div className="flex justify-around">
                <button title="Edit"><FontAwesomeIcon icon={faEdit} className="h-8 w-8 text-purple-500 transition-transform transform hover:scale-110"/></button>
                <button title="Delete"><FontAwesomeIcon icon={faTrashAlt} className="h-8 w-8 text-red-500 transition-transform transform hover:scale-110"/></button>
            </div>
        </td>
      </tr>
    ));

  console.log(response);
  return (
    <div className="mt-2 w-full mx-1 rounded-md shadow-md overflow-hidden">
      {response.isLoading ? (
        <BasicLoader />
      ) : (
        <table className="w-full text-sm space-y-4">
          <thead className="my-1 p-1 bg-gray-400 rounded-md shadow-sm">
            <tr>
              <th className="p-1 text-left">SN</th>
              <th className="p-1 text-left">Basics</th>
              <th className="p-1 text-left">Products</th>
              <th className="p-1">Remarks</th>
              <th className="p-1 ">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">{allProductsRenderer}</tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;