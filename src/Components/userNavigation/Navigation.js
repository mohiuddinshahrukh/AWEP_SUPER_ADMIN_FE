import React from "react";
import NavbarTop from "./NavbarTop";
import { SidebarData } from "./SidebarData";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-sidebar">
        <SidebarData />
      </div>
      <div className="navigation-navbartop">
        <NavbarTop />
      </div>
    </div>
  );
};

export default Navigation;
