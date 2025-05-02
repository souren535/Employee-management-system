import React from "react";

const Header = () => {


  const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }
  return (
    <div className=" flex justify-between items-end text-white ">
      <h1 className="text-2xl">
        Hello <br />
        <span className="text-7xl font-semibold">username 👋</span>
      </h1>
      <button onClick={logoutUser} className="px-5 py-3 bg-red-500 rounded-lg text-lg font-medium">
        Logout
      </button>
    </div>
  );
};

export default Header;
