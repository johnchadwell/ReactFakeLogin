import React from "react";
import { useAuth } from "../context/AuthContext";
import LoginStatus from "../login/LoginStatus";
import '../ui/ui.css';

const HomePage = () => {
  const { LoggedIn } = useAuth();
  return (
    <>
    <div className="div-center-row">
      <div className="div-center-column">
        <b>HomePage</b>
        <LoginStatus/>
        </div>
    </div>
    </>
  );

};

export default HomePage;
