import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className="text-white w-full mt-10 p-10 flex flex-row justify-between items-center rounded-xl bg-zinc-700 ">
        <form action="" className="gap-[80vh] flex ">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl ">Task Title</h3>
            <input
              className="w-2xl border-1 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-3"
              type="text"
              placeholder="Make a UI design"
            />
            <h3 className="text-xl mt-2">Date</h3>
            <input
              className="w-2xl border-1 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-3"
              type="date"
            />
            <h3 className="text-xl mt-2">Assign To</h3>
            <input
              className="w-2xl border-1 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-3"
              placeholder="Employee name"
              type="text"
            />
            <h3 className="text-xl mt-2">Category</h3>
            <input
              className="w-2xl border-1 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-3"
              type="text"
              placeholder="Design, Development, etc......"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl mt-2">Description</h3>
            <textarea
              className="w-2xl border-1 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-3"
              name=""
              id=""
              cols="30"
              rows="12"
              placeholder="Detailed description of task (Max 500 word)"
            ></textarea>

            <button className="block w-full py-3 bg-red-600 rounded-lg mt-5 mx-auto">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
