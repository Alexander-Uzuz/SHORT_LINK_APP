import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Registration, Login } from "modules/auth/pages";
import { Links, CreateLinks } from "modules/links/pages";
import { RequireAuth } from "common/helpers/RequireAuth";
import { Wrapper } from "common/components/Wrapper/Wrapper";

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/links" />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<RequireAuth />}>
            <Route path="/links" element={<Links />} />
            <Route path="/links/create" element={<CreateLinks />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
