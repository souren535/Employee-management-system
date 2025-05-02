import React from "react";

const AccpetTask = ({data}) => {
  return (
    <div className="bg-yellow-500 h-full w-[450px] rounded-xl flex-shrink-0 p-5">
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
      <div className="flex justify-between mt-5">
          <button className="bg-green-500 text-white px-3 py-2 rounded-lg font-semibold">
              Mark as completed
          </button>
          <button className="bg-red-500 text-white px-3 py-2 rounded-lg font-semibold">
            Mark as Failed
          </button>
      </div>
    </div>
  );
};

export default AccpetTask;
