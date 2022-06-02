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
    path: "/vendor",
    icon: <MdDashboard />,
  },
  {
    title: "Service Categories",
    path: "/vendor",
    icon: <HiUserGroup />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: "Register to Service Category",
        path: "/vendor/registerToServiceCateogry",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "My Services",
        path: "/vendor/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Bookings",
    path: "/vendor/bookings",
    icon: <BiCalendar />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: "Create new booking",
        path: "/vendor/registerToServiceCateogry",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Chat",
    path: "/vendor/chat",
    icon: <BsChatTextFill />,
  },
  {
    title: "Payments",
    path: "/vendor/payments",
    icon: <GiTakeMyMoney />,

    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: "Transactions",
        path: "/vendor/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Payment Methods",
        path: "/vendor/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Feedback & Complaints",
    path: "/vendor/feedback&Complaints",
    icon: <BiMessageError />,
  },
  {
    title: "Settings",
    path: "/vendor/settings",
    icon: <VscSettings />,
  },
];
