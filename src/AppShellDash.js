import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Grid,
  MantineProvider,
} from "@mantine/core";
import NavbarTop from "./NavbarTop";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Dashbaordmain from "./Dashbaordmain";
import { NotificationsProvider, ModalProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

export default function AppShellDash() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
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
        <Outlet />
      </AppShell>
    </>
  );
}
