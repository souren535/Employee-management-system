import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import AuthContext from "./context/AuthContext";
import { TaskContext } from "./context/TaskContext";

const App = () => {
  return (
    <>
      <AuthContext>
        <TaskContext>
          <Login />
        </TaskContext>
      </AuthContext>
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
