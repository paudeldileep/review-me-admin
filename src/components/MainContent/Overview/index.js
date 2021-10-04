
import React from 'react';
import Counts from './Counts';
import MonthlyPlot from './MonthlyPlot';

const Overview = () => {
    return (
        <div className="w-full h-full">
            {/*  overview cards section */}
            <Counts/>
            {/* chart div */}
            <div className="chart_div w-full mt-4 h-56 border border-gray-300 mr-4 rounded-md">
                <MonthlyPlot/>
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