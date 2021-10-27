import React, { useEffect } from 'react';
import { useFetchHelper } from '../../../utils/useFetchHelper';
import BasicLoader from '../../Utils/UI/BasicLoader';

const UsersOverview = () => {

    const[response,setResponse]=useFetchHelper('admin/top_users')

    useEffect(()=>{
        setResponse('admin/top_users')
    },[])

    return (
        <>
        {response.isLoading ? <BasicLoader/>:<div className="ml-1 p-1">
                {response.data?.map(user=><div key={user._id} className="rounded-md shadow-sm border-gray-300 mb-2 mt-1 p-1 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="font-bold text-purple-500">{user.firstname} {user.lastname}</h2>
                    <h4 className="text-xs italic">Products: {user.count}</h4>
                </div>)}
            </div>}
        </>
    );
}

export default UsersOverview;