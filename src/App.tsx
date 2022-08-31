import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Registration, Login } from "modules/auth/pages";
import { Dashboard } from "modules/dashboard/Dashboard";
import "./variables.scss";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
};
