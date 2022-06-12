import {
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  Grid,
  Input,
  InputWrapper,
  Menu,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Link, Outlet } from "react-router-dom";

import {
  ArrowsLeftRight,
  MessageCircle,
  Photo,
  Search,
  Settings,
  Trash,
} from "tabler-icons-react";

import { ChatsData } from "./ChatsData";

const Chats = () => {
  return (
    <Container fluid p="lg">
      <Grid>
        <Grid.Col span={3} style={{ borderRight: "1px solid #EAEAEA" }}>
          <InputWrapper label="Search A chat">
            <Input
              rightSection={<Search />}
              placeholder="Search Chat..."
            ></Input>
          </InputWrapper>

          {ChatsData.map((data) => {
            return (
              <Link
                to="alonsoMosely"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
                    textAlign: "center",
                    padding: theme.spacing.xs,
                    margin: "5px",
                    borderRadius: theme.radius.md,
                    cursor: "pointer",
                    borderBottom: "1px solid #EAEAEA",
                    textDecoration: "",
                    color: "black",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[3],
                    },
                  })}
                >
                  <Grid align="center">
                    <Grid.Col span={3}>
                      <Avatar size="lg" src={data.customerAvatar} />
                    </Grid.Col>
                    <Grid.Col span={9}>
                      <Grid align="center">
                        <Grid.Col span={6}>
                          <Title order={4}> {data.customerName}</Title>
                          <Text> {data.messageBrief}</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Text>{data.messageTime}</Text>
                        </Grid.Col>
                      </Grid>
                    </Grid.Col>
                  </Grid>
                </Box>
              </Link>
            );
          })}
        </Grid.Col>

        <Grid.Col span={9}>
          <Grid
            align="center"
            style={{
              borderBottom: "1px solid #EAEAEA",
            }}
          >
            <Grid.Col span={9}>
              <Center>
                <div style={{ textAlign: "center" }}>
                  <Title order={3}>Ali Ahmed - Majesty Opulance Marquee</Title>
                  <Text>Event Date: 25-12-2022</Text>
                  <Text>Booking ID: 25-12-2022</Text>
                </div>
              </Center>
            </Grid.Col>

            <Grid.Col span={3}>
              <Center>
                <div>
                  <Menu size="md">
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item icon={<Settings size={14} />}>
                      Settings
                    </Menu.Item>
                    <Menu.Item icon={<MessageCircle size={14} />}>
                      Messages
                    </Menu.Item>
                    <Menu.Item icon={<Photo size={14} />}>Gallery</Menu.Item>
                    <Menu.Item
                      icon={<Search size={14} />}
                      rightSection={
                        <Text size="xs" color="dimmed">
                          ⌘K
                        </Text>
                      }
                    >
                      Search
                    </Menu.Item>
                    <Divider />
                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item icon={<ArrowsLeftRight size={14} />}>
                      Transfer my data
                    </Menu.Item>
                    ,
                    <Menu.Item color="red" icon={<Trash size={14} />}>
                      Delete my account
                    </Menu.Item>
                  </Menu>
                </div>
              </Center>
            </Grid.Col>
          </Grid>
          <Grid.Col span={9}>
            <Outlet />
          </Grid.Col>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Chats;
