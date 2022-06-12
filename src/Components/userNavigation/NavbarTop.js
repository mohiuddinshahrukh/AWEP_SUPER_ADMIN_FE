import { ActionIcon } from "@mantine/core";
import React from "react";
import { BsSearch, BsChatLeft } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { Sun } from "tabler-icons-react";
const NavbarTop = () => {
  return (
    <div>
      <div className="navbar-top">
        <div className="navbar-top-left">
          <h2>Vendor Dashbaord</h2>
        </div>

        <div className="navbar-top-middle">
          <div className="navbar-top-searchbar">
            <div className="navbar-top-searchbar-left">
              <BsSearch className="navbar-top-searchbar-left-logo" />
              <input
                className="navbar-top-searchbar-inputField"
                type="text"
                placeholder="Search"
              />
            </div>

            <div className="navbar-top-searchbar-right">
              <button className="navbar-top-searchbar-searchbutton">
                <BsSearch className="navbar-top-searchbar-searchbutton-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-top-right">
          <ActionIcon variant="outline" title="Toggle color scheme">
            <Sun />
          </ActionIcon>
          <FiLogOut className="navbar-top-right-icon" />
          <BsChatLeft className="navbar-top-right-icon" />
          <MdNotificationsNone className="navbar-top-right-icon" />
          <div className="navbar-top-right-avatar"></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
