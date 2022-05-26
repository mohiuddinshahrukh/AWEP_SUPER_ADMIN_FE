import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;

  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  align-items: center;

  &:hover {
    background: #dc3545;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    transition: 350ms;
    align-items: center;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  &:focus {
    background: #dc3545;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    transition: 350ms;
    align-items: center;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  transition: 350ms;
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #dc3545;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    cursor: pointer;
    transition: 350ms;
    align-items: center;
  }
  &:focus {
    background: #dc3545;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    transition: 350ms;
    align-items: center;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
