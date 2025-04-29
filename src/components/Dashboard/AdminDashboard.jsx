import React from "react";
import Header from "../others/Header";

const AdminDashboard = () => {
  return (
    <div className="bg-zinc-950  p-10">
      <Header />
      <div className="text-white w-full  p-15 flex justify-center">
        <form action="">
          <h3 className="text-xl ">Task Title</h3>
          <input
            className="w-2xl bg-zinc-600 rounded-lg px-3 py-3"
            type="text"
            placeholder="Make a UI design"
          />
          <h3 className="text-xl mt-2">Description</h3>
          <textarea
            className="w-2xl bg-zinc-600 rounded-lg px-3 py-3"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Detailed description of task (Max 500 word)"
          ></textarea>
          <h3 className="text-xl mt-2">Date</h3>
          <input
            className="w-2xl bg-zinc-600 rounded-lg px-3 py-3"
            type="date"
          />
          <h3 className="text-xl mt-2">Assign To</h3>
          <input
            className="w-2xl bg-zinc-600 rounded-lg px-3 py-3"
            type="text"
          />
          <h3 className="text-xl mt-2">Category</h3>
          <input
            className="w-2xl bg-zinc-600 rounded-lg px-3 py-3"
            type="text"
            placeholder="Design, Development, etc......"
          />
          <button className="block w-1/2 py-3 bg-zinc-600 rounded-lg mt-5 mx-auto">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
