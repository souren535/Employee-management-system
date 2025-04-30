import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import AuthContext from "./context/AuthContext";
import { TaskContext } from "./context/TaskContext";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setuser] = useState(null);

  
  return (
    <>
      <AuthContext>
        <TaskContext>
          {!user ? <Login /> : ""}
        </TaskContext>
      </AuthContext>
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
