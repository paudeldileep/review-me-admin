import { ArrowsExpandIcon } from '@heroicons/react/outline';
import { UserGroupIcon } from '@heroicons/react/solid';
import React from 'react';

const Overview = () => {
    return (
        <div className="w-full h-full">
            {/*  overview cards section */}
            <div className="w-full h-auto flex flex-wrap items-center justify-between mx-2">
                <div className="h-32 w-48 mx-2 my-2 border border-gray-400 rounded shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center mt-2 mx-1 justify-center">
                        <UserGroupIcon className="h-8 w-8 text-purple-500 mr-1"/>
                        <h2 className="text-xl font-bold">Active Users</h2>
                    </div>
                    <div className="flex items-center mt-2 mx-1 justify-evenly">
                        <h4 className="text-lg font-bold">1234</h4>
                        <ArrowsExpandIcon className="h-8 w-8 text-purple-500 mr-1"/>
                    </div>
                </div>
                <div className=" h-32 w-48 mx-2 my-2 border border-gray-400 rounded shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105">

                </div>
                <div className=" h-32 w-48 mx-2 my-2 border border-gray-400 rounded shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105">

                </div>
            </div>
            {/* chart div */}
            <div className="chart_div w-full mt-4 h-56 border border-gray-300 mr-4 rounded-md">

            </div>

            {/* some random info */}
            <div className="w-full h-auto mt-4 flex flex-wrap justify-between">
                {/* left section */}
                <div className="w-7/12 min-w-max h-56 mx-2 border border-gray-300 rounded-md">

                </div>
                {/* right section */}
                <div className="w-4/12 h-56 mx-2 border border-gray-300 rounded-md">

                </div>
            </div>
        </div>
    );
}

export default Overview;