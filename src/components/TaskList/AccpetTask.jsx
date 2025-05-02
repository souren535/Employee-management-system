import React from "react";

const AccpetTask = () => {
  return (
    <div className="bg-red-500 h-full w-[450px] rounded-xl flex-shrink-0 p-5">
      <div className="flex justify-between">
        <h3 className="bg-red-400 px-3 text-white text-lg font-semibold">
          High
        </h3>
        <h2 className="text-white font-sm font-semibold">29 apr 2025</h2>
      </div>
      <h1 className="text-white text-2xl mt-5 font-bold">
        Making a Employee TaskList
      </h1>
      <p className="text-white text-medium mt-3 font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque impedit
        vel pariatur fugit voluptatibus. Id?
      </p>
      <div className="flex justify-between mt-5">
          <button className="bg-greed-500 text-white px-3 py-2 rounded-lg font-semibold">
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
