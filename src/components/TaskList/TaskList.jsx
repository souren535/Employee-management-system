import React from "react";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import AccpetTask from "./AccpetTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto text-white w-full h-[55%] mt-10 flex justify-start gap-5 flex-nowrap items-center py-5"
    >
      {data.tasks.map((e, id) => {
        if (e.newTask) {
          return <NewTask key={id} data={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={id} data={e} />;
        }
        if (e.active) {
          return <AccpetTask key={id} data={e} />;
        }

        if (e.failed) {
          return <FailedTask key={id} data={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;
