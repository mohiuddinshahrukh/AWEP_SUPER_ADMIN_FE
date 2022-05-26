import React from "react";

import * as IoIcons from "react-icons/io";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BiCalendar, BiMessageError } from "react-icons/bi";
import { BsChatTextFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { VscSettings } from "react-icons/vsc";
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Service Categories",
    path: "/ServiceCategories",
    icon: <HiUserGroup />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: "Register to Service Category",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "My Services",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Bookings",
    path: "/bookings",
    icon: <BiCalendar />,
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <BsChatTextFill />,
  },
  {
    title: "Payments",
    path: "/payments",
    icon: <GiTakeMyMoney />,

    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: "Transactions",
        path: "/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Payment Methods",
        path: "/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Feedback & Complaints",
    path: "/feedback&Complaints",
    icon: <BiMessageError />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <VscSettings />,
  },
];
