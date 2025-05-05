import React from "react";

const Loading = () => {
  return (
    <div className="bg-black text-white min-h-dvh py-16 px-4 md:px-8 flex justify-center items-center">
      <div className="animate-pulse space-y-8 w-full max-w-7xl">
        <div className="h-12 bg-gray-800 rounded-lg w-3/4 mx-auto"></div>
        <div className="h-6 bg-gray-800 rounded-lg w-1/2 mx-auto"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl h-80"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
