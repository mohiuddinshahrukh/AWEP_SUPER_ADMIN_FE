import { Box, Center, Grid, Select, Switch, Text, Title } from "@mantine/core";
import React from "react";
import { ChevronRight } from "tabler-icons-react";

const Setttings = () => {
  return (
    <div>
      <Grid>
        <Grid.Col span={6} style={{ borderRight: "1px solid #EAEAEA" }}>
          <Grid p="md" style={{ borderBottom: "1px solid #EAEAEA" }}>
            <Grid.Col span={6}>
              <Title order={3}>Light Mode/Dark Mode</Title>
            </Grid.Col>
            <Grid.Col span={3}>
              <Center>
                <Switch size="lg" onLabel="ON" offLabel="OFF" />
              </Center>
            </Grid.Col>
            <Grid.Col>
              <Text>Change the Color Scheme of your app!</Text>
            </Grid.Col>
          </Grid>
          <Grid p="md" style={{ borderBottom: "1px solid #EAEAEA" }}>
            <Grid.Col span={6}>
              <Title order={3}>Turn on booking notifications</Title>
            </Grid.Col>
            <Grid.Col span={3}>
              <Center>
                <Switch size="lg" onLabel="ON" offLabel="OFF" />
              </Center>
            </Grid.Col>
            <Grid.Col>
              <Text>Allow access to send notifications</Text>
            </Grid.Col>
          </Grid>
          <Grid p="md" style={{ borderBottom: "1px solid #EAEAEA" }}>
            <Grid.Col span={6}>
              <Title order={3}>Turn on complain notifications</Title>
            </Grid.Col>
            <Grid.Col span={3}>
              <Center>
                <Switch size="lg" onLabel="ON" offLabel="OFF" />
              </Center>
            </Grid.Col>
            <Grid.Col>
              <Text>Toggle Between notifications!</Text>
            </Grid.Col>
          </Grid>
          <Grid p="md" style={{ borderBottom: "1px solid #EAEAEA" }}>
            <Grid.Col span={6}>
              <Title order={3}>Turn on chat notifications</Title>
            </Grid.Col>
            <Grid.Col span={3}>
              <Center>
                <Switch size="lg" onLabel="ON" offLabel="OFF" />
              </Center>
            </Grid.Col>
            <Grid.Col>
              <Text>Toggle your chat notifications</Text>
            </Grid.Col>
          </Grid>
          <Grid p="md" style={{ borderBottom: "1px solid #EAEAEA" }}>
            <Grid.Col span={6}>
              <Title order={3}>Change Chat Notification Tones</Title>
            </Grid.Col>
            <Grid.Col span={3}>
              <Center>
                <Select
                  placeholder="Notification Tones"
                  searchable
                  nothingFound="No options"
                  data={["Jingle", "Bell", "Nail", "Arrow"]}
                />
              </Center>
            </Grid.Col>
            <Grid.Col>
              <Text>Chat Notifications by selecting one</Text>
            </Grid.Col>
          </Grid>
          <Grid p="md" style={{ borderBottom: "1px solid #EAEAEA" }}>
            <Grid.Col span={6}>
              <Title order={3}>Change Text Size</Title>
            </Grid.Col>
            <Grid.Col span={3}>
              <Center>
                <Select
                  placeholder="Text Sizes"
                  searchable
                  nothingFound="No options"
                  data={["Small", "Medium", "Large", "Extra large"]}
                />
              </Center>
            </Grid.Col>
            <Grid.Col>
              <Text>Imroves the visibility as per user preference</Text>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={6}>
          <Grid p="md">
            <Grid.Col>
              <Title order={3}>Frequently Asked Questions</Title>
            </Grid.Col>
          </Grid>
          <Grid p="md">
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                What is Payment Gateway
                <ChevronRight />
              </Box>
            </Grid.Col>
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                Do I need to pay to Instapay even when there is no transaction
                going on in my business?
                <ChevronRight />
              </Box>
            </Grid.Col>
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                What platforms does AWEP payment gateway support?
                <ChevronRight />
              </Box>
            </Grid.Col>
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                Does AWEP provide international payments support?
                <ChevronRight />
              </Box>
            </Grid.Col>
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                Is there any setup fee or annual maintainance fee that I need to
                pay regularly?
                <ChevronRight />
              </Box>
            </Grid.Col>
            <Grid.Col>
              <Title order={3}>Guides & About</Title>
            </Grid.Col>
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                Learn More Of Vendor Side - AWEP
                <ChevronRight />
              </Box>
            </Grid.Col>
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                How to boost your booking
                <ChevronRight />
              </Box>
            </Grid.Col>
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                App Policy
                <ChevronRight />
              </Box>
            </Grid.Col>
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                Contact Us
                <ChevronRight />
              </Box>
            </Grid.Col>
            <Grid.Col>
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[1],
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[3],
                  },
                })}
              >
                Our Social Media Handles
                <ChevronRight />
              </Box>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Setttings;
