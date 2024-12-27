import React from "react";
import { useAuth } from "../context/AuthContext";
import { LogoutButton } from "../ui/ui";
import { useNavigate } from 'react-router-dom';
import LoginStatus from "./LoginStatus";

import '../ui/ui.css';

function LogoutPage() {
  const { LoggedIn } = useAuth();
  const { login, logout, setCurrentUser, setEmail, setPassword, password, email } = useAuth();
  const navigate = useNavigate()

  return (
    <>
    <div className="div-center-row">
      <div className="div-center-column">
      <LoginStatus/>
      <LogoutButton
           onClick={() => {
             navigate("/dashboard");
             logout();
           }}
         >
           Log Out?
         </LogoutButton>
      </div>
    </div>
    </>
);
}

export default LogoutPage;

