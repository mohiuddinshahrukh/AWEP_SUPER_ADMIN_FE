import { FaCashRegister } from "react-icons/fa";
import { SiApplemusic, SiStylelint } from "react-icons/si";
import { MdFoodBank } from "react-icons/md";

import { GoVerified, GoUnverified } from "react-icons/go";
import {
  Anchor,
  Center,
  Divider,
  Grid,
  Paper,
  Switch,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

import StatsbarContainer from "./StatsbarContainer";

import LineChart from "./LineChart";
import PieChartDash from "./PieChartDash";
import { useState } from "react";
import { Calendar } from "@mantine/dates";

import ActionMenuDash from "./ActionMenuDash";

function CalendarDemo() {
  const [value, setValue] = useState(null);
  return <Calendar value={value} onChange={setValue} />;
}

const Dashbaordmain = () => {
  return (
    <Paper p="md">
      <Title order={2} my="20px">
        All time Statistics
      </Title>
      <Divider />
      <StatsbarContainer />
      <Divider />
      <Title order={2} my="20px">
        System Accounts Analytics
      </Title>
      <Divider />
      <Grid>
        <Grid.Col lg={9}>
          <Grid justify="center">
            <Grid.Col justify="center" lg={7}>
              <Center>
                <LineChart lineChartTitle="Yearly Revenue (Earned By Subscriptions)" />
              </Center>
            </Grid.Col>

            <Grid.Col lg={5} my="md">
              <Center>
                <div className="system-acc-analytics-booking-Tracker">
                  <Title order={2} m="20px">
                    Booking Tracker
                  </Title>
                  <div className="system-acc-analytics-booking-Tracker-centered">
                    <Title order={3}>Last 30 Days</Title>
                    <Grid
                      align="center"
                      className="system-acc-analytics-pieChart"
                    >
                      <Grid.Col span={12}>
                        <PieChartDash />
                      </Grid.Col>
                    </Grid>
                    <Title order={2}>Service Booking Distribution</Title>
                  </div>

                  <div className="system-acc-analytics-all-logos-text">
                    <div className="system-acc-analytics-logos-text">
                      <FaCashRegister className="system-acc-analytics-logo1" />
                      <p className="system-acc-analytics-text">Photography </p>
                    </div>
                    <div className="system-acc-analytics-logos-text">
                      <GoVerified className="system-acc-analytics-logo2" />
                      <p className="system-acc-analytics-text">Music</p>
                    </div>
                    <div className="system-acc-analytics-logos-text">
                      <GoUnverified className="system-acc-analytics-logo3" />
                      <p className="system-acc-analytics-text">Decor</p>
                    </div>
                  </div>
                </div>
              </Center>
            </Grid.Col>

            <Grid.Col justify="center" lg={7}>
              <Center>
                <LineChart lineChartTitle="Yearly Expenses " />
              </Center>
            </Grid.Col>

            <Grid.Col lg={5}>
              <Center>
                {" "}
                <div className="system-acc-analytics-booking-Tracker">
                  <Title order={2} m="20px">
                    Booking Tracker
                  </Title>
                  <div className="system-acc-analytics-booking-Tracker-centered">
                    <Title order={3}>Last 30 Days</Title>
                    <Grid
                      align="center"
                      className="system-acc-analytics-pieChart"
                    >
                      <Grid.Col span={12}>
                        <PieChartDash />
                      </Grid.Col>
                    </Grid>
                    <Title order={2}>Service Booking Distribution</Title>
                  </div>

                  <div className="system-acc-analytics-all-logos-text">
                    <div className="system-acc-analytics-logos-text">
                      <FaCashRegister className="system-acc-analytics-logo1" />
                      <p className="system-acc-analytics-text">Photography </p>
                    </div>
                    <div className="system-acc-analytics-logos-text">
                      <GoVerified className="system-acc-analytics-logo2" />
                      <p className="system-acc-analytics-text">Music</p>
                    </div>
                    <div className="system-acc-analytics-logos-text">
                      <GoUnverified className="system-acc-analytics-logo3" />
                      <p className="system-acc-analytics-text">Decor</p>
                    </div>
                  </div>
                </div>
              </Center>
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col lg={3}>
          <Center>
            <div className="system-acc-analytics-container-top">
              <Title style={{ marginTop: 10, marginLeft: 20 }} order={3}>
                Calendar
              </Title>
              <div className="system-acc-analytics-container-calendar">
                <CalendarDemo />
              </div>
              <Divider my="sm" />
              <div className="system-acc-analytics-container-middle">
                <Title m={20} order={3}>
                  My Services
                </Title>

                <Grid justify="space" align="center" mx={10} px={10}>
                  <Grid.Col span={6}>
                    <Text color="" size="md">
                      DJ & Music
                    </Text>
                    <Text color="#7CE9F6" size="sm">
                      1423 Bookings
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={3}></Grid.Col>
                  <Grid.Col span={3}>
                    <Switch color="green" />
                  </Grid.Col>
                </Grid>

                <Grid justify="space" align="center" mx={10} px={10}>
                  <Grid.Col span={6}>
                    <Text color="" size="md">
                      Photography
                    </Text>
                    <Text color="#F9896B" size="sm">
                      1299 Bookings
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={3}></Grid.Col>
                  <Grid.Col span={3}>
                    <Switch color="green" />
                  </Grid.Col>
                </Grid>

                <Grid justify="space" align="center" mx={10} px={10}>
                  <Grid.Col span={6}>
                    <Text color="" size="md">
                      Decor
                    </Text>
                    <Text color="#2B00D4" size="sm">
                      632 Bookings
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={3}></Grid.Col>
                  <Grid.Col span={3}>
                    <Switch color="green" />
                  </Grid.Col>
                </Grid>

                <Divider my="lg" />
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Title mx={20} order={3}>
                      Popular Packages
                    </Title>
                  </Grid.Col>
                  <Grid.Col offset={3} span={3}>
                    <Anchor component={Link} to="/react-router">
                      View All
                    </Anchor>
                  </Grid.Col>
                </Grid>

                <Grid align="center" mx={10}>
                  <Grid.Col span={2}>
                    <SiApplemusic
                      style={{
                        backgroundColor: "white",
                        color: "#B558F6",
                        height: "44.4px",
                        width: "39.36px",
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={8}>DJ & Music</Grid.Col>
                  <Grid.Col span={2}>
                    <ActionMenuDash />
                  </Grid.Col>
                </Grid>

                <Grid align="center" mx={10}>
                  <Grid.Col span={2}>
                    <SiStylelint
                      style={{
                        backgroundColor: "white",
                        color: "#B558F6",
                        height: "44.4px",
                        width: "39.36px",
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={8}>Stage & Decor</Grid.Col>
                  <Grid.Col span={2}>
                    <ActionMenuDash />
                  </Grid.Col>
                </Grid>

                <Grid align="center" mx={10}>
                  <Grid.Col span={2}>
                    <MdFoodBank
                      style={{
                        backgroundColor: "white",
                        color: "#B558F6",
                        height: "44.4px",
                        width: "39.36px",
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={8}>Food & Catering</Grid.Col>
                  <Grid.Col span={2}>
                    <ActionMenuDash />
                  </Grid.Col>
                </Grid>
              </div>
            </div>
          </Center>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default Dashbaordmain;
