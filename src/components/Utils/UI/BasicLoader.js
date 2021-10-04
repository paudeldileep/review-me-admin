import React from 'react';

const BasicLoader = () => {
    return (
        <div className="w-full h-full bg-gray-500 bg-opacity-25 backdrop-filter backdrop-blur-md flex items-center justify-center">
            <span className="h-10 w-10 border-t-2 border-b-2 rounded-full border-purple-600 animate-spin"></span>
        </div>
    );
}

export default BasicLoader;