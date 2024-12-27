import React from "react";
import { useAuth } from "../context/AuthContext";
import LoginStatus from "../login/LoginStatus";
import '../ui/ui.css';

const Dashboard = () => {
  const { LoggedIn } = useAuth();
  return (
    <>
    <div className="div-center-row">
      <div className="div-center-column">
        <b>Dashboard Page</b>
        <LoginStatus/>
        </div>
    </div>
    </>
  );

//   return LoggedIn ? (
//     <>
//     <h>Logged In</h>
//     </>
//   ) : (
//     <>
//     <h>Not Logged In</h>
//     </>
//   );
};

export default Dashboard;
