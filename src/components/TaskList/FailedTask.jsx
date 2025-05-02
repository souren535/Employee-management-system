import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="bg-red-400 h-full w-[450px] rounded-xl flex-shrink-0 p-5">
      <div className="flex justify-between">
        <h3 className="bg-red-400 px-3 text-white text-lg font-semibold">
          {data.category}
        </h3>
        <h2 className="text-white font-sm font-semibold">{data.date}</h2>
      </div>
      <h1 className="text-white text-2xl mt-5 font-bold">
        {data.title}
      </h1>
      <p className="text-white text-medium mt-3 font-semibold">
        {data.description}
      </p>
      <div className="mt-5">
        <button className="w-full text-white font-semibold ">Failed Task</button>
      </div>
    </div>
  );
};

export default FailedTask;
