import { Avatar, Box, Divider, Grid, Menu, Text } from "@mantine/core";
import React from "react";
import {
  ArrowsLeftRight,
  MessageCircle,
  Photo,
  Search,
  Settings,
  Trash,
} from "tabler-icons-react";
import { AlonsoMoselyChatData } from "./AlonsoMoselyChatData";
import { ChatsData } from "./ChatsData";
const alonsoMosely = ChatsData.map((data) => {
  return data;
});
const AlonsoMoselyChat = () => {
  return (
    <div>
      {AlonsoMoselyChatData.map((data) => {
        return (
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[1],

              padding: theme.spacing.xs,
              margin: theme.spacing.xs,
              borderRadius: theme.radius.md,
              alignItems: "center",
            })}
          >
            <Grid align="center">
              <Grid.Col span={3} style={{ borderRight: "1px solid #dadada" }}>
                <Grid justify="flex-start">
                  <Grid.Col span={4}>
                    <Avatar size="lg" src={alonsoMosely[0].customerAvatar} />
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Text>{alonsoMosely[0].customerName}</Text>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
              <Grid.Col span={6}>{data.message}</Grid.Col>
              <Grid.Col span={3}>
                <Grid
                  justify="flex-end"
                  style={{ borderLeft: "1px solid #dadada" }}
                >
                  <Grid.Col span={3}>
                    <Menu>
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
                  </Grid.Col>
                  <Grid.Col offset={6} span={6}>
                    {data.sentDate}
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Box>
        );
      })}
    </div>
  );
};

export default AlonsoMoselyChat;
