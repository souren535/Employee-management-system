import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-between items-end text-white ">
      <h1 className="text-2xl">
        Hello <br />
        <span className="text-7xl font-semibold">Souren 👋</span>
      </h1>
      <button className="px-5 py-3 bg-red-500 rounded-lg text-lg font-medium">
        Logout
      </button>
    </div>
  );
};

export default Header;
