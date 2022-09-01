import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Registration, Login } from "modules/auth/pages";
import { Wrapper } from "common/components/Wrapper/Wrapper";
import { Links } from "modules/links/Links";
import "./variables.scss";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/links" />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Wrapper/>}>
          <Route path="/links" element={<Links/>}/>
        </Route>
      </Routes>
    </div>
  );
};
