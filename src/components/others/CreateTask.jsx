import React, { useState } from "react";

const CreateTask = () => {
  const [tasktitle, setTasktitle] = useState("");
  const [taskDate, setTaskdate] = useState("");
  const [taskAssign, setTaskassign] = useState("");
  const [taskCategory, setTaskcategory] = useState("");
  const [taskDescription, setTaskdescription] = useState("");

  const submithendeler = (e) => {
    e.preventDefault();

    const newTask = {
      tasktitle,
      taskDate,
      taskAssign,
      taskCategory,
      taskDescription,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    let data = JSON.parse(localStorage.getItem("employees")) || [];

    let assigned = false;
    data.forEach((employee) => {
      if (employee.firstname === taskAssign) {
        if (!employee.tasks) {
          employee.tasks = [];
        }
        employee.tasks.push(newTask);
        console.log("Task added to:", employee);
        assigned = true;
        employee.active = true;
        employee.taskCounts.newTask = employee.taskCounts.newTask + 1;
      }
    });

    if (assigned) {
      localStorage.setItem("employees", JSON.stringify(data));
      alert("Task Created Successfully");
    } else {
      alert("Employee not found!");
    }

    setTasktitle("");
    setTaskdate("");
    setTaskassign("");
    setTaskcategory("");
    setTaskdescription("");
  };

  return (
    <div className="w-full mt-10 px-4">
      <div className="max-w-screen-xl mx-auto bg-zinc-700 p-6 md:p-10 rounded-xl text-white">
        <form
          onSubmit={submithendeler}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Left Column */}
          <div className="flex flex-col flex-1 gap-4">
            <div>
              <h3 className="text-lg md:text-xl">Task Title</h3>
              <input
                value={tasktitle}
                onChange={(e) => setTasktitle(e.target.value)}
                type="text"
                name="title"
                placeholder="Make a UI design"
                className="w-full border border-zinc-500 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <h3 className="text-lg md:text-xl mt-2">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskdate(e.target.value)}
                type="date"
                name="date"
                className="w-full border border-zinc-500 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <h3 className="text-lg md:text-xl mt-2">Assign To</h3>
              <input
                value={taskAssign}
                onChange={(e) => setTaskassign(e.target.value)}
                type="text"
                name="assign"
                placeholder="Employee name"
                className="w-full border border-zinc-500 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <h3 className="text-lg md:text-xl mt-2">Category</h3>
              <input
                value={taskCategory}
                onChange={(e) => setTaskcategory(e.target.value)}
                type="text"
                name="category"
                placeholder="Design, Development, etc..."
                className="w-full border border-zinc-500 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col flex-1 gap-4">
            <div>
              <h3 className="text-lg md:text-xl mt-2">Description</h3>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskdescription(e.target.value)}
                placeholder="Detailed description of task (Max 500 words)"
                className="w-full border border-zinc-500 placeholder:text-zinc-400 bg-transparent rounded-lg px-3 py-2"
                rows="12"
                name="description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 rounded-lg text-lg font-medium hover:bg-red-700 transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
