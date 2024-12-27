import React from "react";
import { useAuth } from "../context/AuthContext";
import { LoginButton } from "../ui/ui";
import { useNavigate } from 'react-router-dom';
import LoginStatus from "./LoginStatus";

import '../ui/ui.css';


function LoginPage() {
  const { LoggedIn } = useAuth();
  const { login, setCurrentUser, setEmail, setPassword, password, email } = useAuth();
  const navigate = useNavigate()

  return (
    <>
    <div className="div-center-row">
      <div className="div-center-column">
      <LoginStatus/>
      <LoginButton
        onClick={() => {
         navigate("/dashboard");
        login();
        }}
        >
        Sign In?
        </LoginButton>
      </div>
    </div>

</>
);
}

export default LoginPage;

