import React from "react";
import SidebarSVG from "./images/SidebarSVG";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>AWEP</h2>
        </div>
        <div className="sidebar-data">
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
        <img src="src\images\web-designer-building-website.svg" alt="" />
        <SidebarSVG />
        <div className="sidebar-footer">
          <p>About</p>
          <p>Help</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
