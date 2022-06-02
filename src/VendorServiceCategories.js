import {
  Avatar,
  BackgroundImage,
  Box,
  Center,
  Grid,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import BgImage from "./BgImage";
import { VendorServiceCategoriesData } from "./VendorServiceCategoriesData";

const VendorServiceCategories = () => {
  return (
    <Paper
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Grid
        justify="center"
        align="center"
        style={{ borderBottom: "1px solid #EAEAEA" }}
      >
        <Grid.Col span={4}>
          <Title order={3}>Available Service Categories</Title>
        </Grid.Col>

        <Grid.Col span={4}>
          <Title order={3}>Category Details</Title>
        </Grid.Col>

        <Grid.Col span={4}>
          <Title order={3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-filter"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
            </svg>
          </Title>
        </Grid.Col>
      </Grid>

      <Grid style={{ width: "100%", height: "100%" }}>
        <Grid.Col
          span={3}
          style={{
            borderRight: "1px solid #EAEAEA",
          }}
        >
          {VendorServiceCategoriesData.map((data) => {
            return (
              <Link
                to={data.path}
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  style={{ borderBottom: "1px solid #EAEAEA" }}
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],

                    display: "flex",
                    alignItems: "center",

                    padding: theme.spacing.md,
                    borderRadius: theme.radius.md,
                    cursor: "pointer",
                    margin: "10px",
                    color: "black",
                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[1],
                    },
                  })}
                >
                  <Avatar
                    style={{ marginLeft: "10%", marginRight: "10%" }}
                    src={data.img}
                    alt="it's me"
                    size="lg"
                  />

                  <Title order={4}> {data.title}</Title>
                </Box>
              </Link>
            );
          })}
        </Grid.Col>
        <Grid.Col span={9}>
          <Outlet />
        </Grid.Col>
        <Grid.Col span={9}></Grid.Col>
      </Grid>
    </Paper>
  );
};

export default VendorServiceCategories;
