import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Grid,
  Paper,
  Box,
  Global,
  BackgroundImage,
  Center,
  Avatar,
} from "@mantine/core";
import NavbarTop from "./NavbarTop";
import Sidebar from "./Sidebar";
import { VendorServiceCategoriesData } from "./VendorServiceCategoriesData";
import { Route, Routes } from "react-router-dom";
import VendorServiceCategories from "./VendorServiceCategories";
import Dashbaordmain from "./Dashbaordmain";

export default function AppShellDash() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 300, lg: 300 }}
        >
          <Sidebar />
        </Navbar>
      }
      footer={
        <Footer>
          <Grid
            p="0px"
            m="0px"
            justify="space-between"
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[1],
            })}
          >
            <Grid.Col xl={1} lg={2} md={3} sm={3} xs={4}>
              <Title order={6}>AWEP @2022</Title>
            </Grid.Col>

            <Grid.Col xl={1} lg={2} md={3} sm={3} xs={4}>
              <Title order={6}>Powered by TRA SAT</Title>
            </Grid.Col>
          </Grid>
        </Footer>
      }
      header={
        <Header height={70}>
          <div>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <div>
                <NavbarTop />
              </div>
            </MediaQuery>
          </div>
        </Header>
      }
    >
      <Routes>
        <Route path="/dashboard" element={<Dashbaordmain />} />
        <Route
          path="/ServiceCategories"
          element={<VendorServiceCategories />}
        />
      </Routes>
    </AppShell>
  );
}
//       <Dashbaordmain />
