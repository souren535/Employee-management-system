import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null);

  const loginHendeler = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setuser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setuser("employee");
    } else {
      alert("Invaild email or password");
    }
  };

  const data = useContext(AuthContext);
  console.log(data);
  return (
    <>
      {!user ? <Login loginHendeler={loginHendeler} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
