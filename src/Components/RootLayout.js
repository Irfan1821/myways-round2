import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const RootLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
