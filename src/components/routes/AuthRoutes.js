import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/HomePage";
import Login from "../login/Login";
import Logout from "../login/Logout";


const AuthRoutes = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default AuthRoutes;
