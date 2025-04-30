import React, { useState } from "react";

const Login = ({loginHendeler}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHamdeler = (e) => {
    e.preventDefault();
    loginHendeler(email, password);
    setemail("");
    setpassword("");
  };
  return (
    <div className="flex bg-zinc-900 justify-center w-full h-screen text-white items-center">
      <div className="form">
        <form
          onSubmit={(e) => {
            submitHamdeler(e);
          }}
          className="flex flex-col"
        >
          <h3 className="text-5xl font-semibold mb-5 text-center">Log In</h3>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            required
            className=" border-2 border-red-300 w-2xl rounded-full py-3 placeholder:text-zinc-400 p-4 outline-none"
            placeholder="Enter Email"
            name="email"
          />

          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            required
            className=" border-2 mt-4 border-red-300 w-2xl rounded-full py-3 placeholder:text-zinc-400 p-4 outline-none"
            placeholder="Enter Password"
            name="password"
          />

          <button className="py-3 w-1/2 bg-red-500 rounded-full mt-3 mx-auto text-lg">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
