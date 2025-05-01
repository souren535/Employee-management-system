import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="flex screen pt-10 justify-between gap-5">
      <div className="rounded-xl bg-blue-500 py-6 px-9 w-[45%]">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>

      <div className="rounded-xl bg-green-400 py-6 px-9 w-[45%]">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>

      <div className="rounded-xl bg-yellow-400 py-6 px-9 w-[45%]">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-semibold">Accepted Task</h3>
      </div>

      <div className="rounded-xl bg-red-600 py-6 px-9 w-[45%]">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
