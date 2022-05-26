import React from "react";
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
