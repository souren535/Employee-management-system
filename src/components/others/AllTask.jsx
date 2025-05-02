import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div id="Alltask" className="bg-[#1c1c1c] p-5 rounded mt-5 h-auto">
      <div className="bg-red-400 mb-3 py-2 px-4 rounded-md text-6xl font-semibold">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-white text-sm font-semibold">
          <h2 className="bg-red-400 px-2 py-1 rounded">Employee Name</h2>
          <h3 className="bg-red-400 px-2 py-1 rounded">New Task</h3>
          <h5 className="bg-red-400 px-2 py-1 rounded hidden sm:block">Complete Task</h5>
          <h5 className="bg-red-400 px-2 py-1 rounded hidden md:block">Active Task</h5>
          <h5 className="bg-red-400 px-2 py-1 rounded hidden md:block">Failed Task</h5>
        </div>
      </div>

      <div className="overflow-auto space-y-3 max-h-[500px]">
        {authData.employees.map((e, i) => (
          <div key={i} className="bg-transparent py-2 px-4 rounded-md text-3xl font-semibold">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-white text-sm">
              <h2 className="text-zinc-100 px-2 py-1 rounded">{e.firstname}</h2>
              <h3 className="text-blue-400 px-2 py-1 rounded">Task</h3>
              <h5 className="text-green-400 px-2 py-1 rounded hidden sm:block">Status</h5>
              <h5 className="text-yellow-400 px-2 py-1 rounded hidden md:block">Active</h5>
              <h5 className="text-red-400 px-2 py-1 rounded hidden md:block">Failed</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
