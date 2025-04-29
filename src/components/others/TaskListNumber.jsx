import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex screen pt-10 justify-between gap-5">
      <div className="rounded-xl bg-red-500 py-6 px-9 w-[45%]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>

      <div className="rounded-xl bg-zinc-800 py-6 px-9 w-[45%]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>

      <div className="rounded-xl bg-orange-500 py-6 px-9 w-[45%]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>

      <div className="rounded-xl bg-violet-500 py-6 px-9 w-[45%]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
