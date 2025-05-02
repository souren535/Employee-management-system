import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        if (userData.role === "admin") {
          setUser("admin");
        } else if (userData.role === "employee" && userData.employee) {
          setUser("employee");
          setLoggedInUserData(userData.employee);
        }
      } catch (error) {
        console.error("Failed to parse loggedInUser:", error);
        localStorage.removeItem("loggedInUser");
      }
    }
  }, []);

  const loginHendeler = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      setLoggedInUserData(null);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", employee })
        );
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? (
        <Login loginHendeler={loginHendeler} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
