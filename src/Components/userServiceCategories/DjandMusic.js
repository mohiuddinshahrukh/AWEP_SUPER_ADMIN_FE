import {
  Grid,
  Title,
  Text,
  TextInput,
  Input,
  InputWrapper,
  Textarea,
  Button,
  Image,
} from "@mantine/core";
import React from "react";
import { ChevronDown, CircleCheck, Photo, Video } from "tabler-icons-react";
import { useRef } from "react";

const DjandMusic = () => {
  const openRef = useRef(null);
  return (
    <div style={{ padding: "10px" }}>
      <Grid style={{ borderBottom: "1px solid #EAEAEA" }}>
        <Grid.Col>
          <Title order={4}>Dj & Music</Title>
        </Grid.Col>
        <Grid.Col>
          <Text>
            Register your DJ and Music Business with AWEP. Provide all the
            related information below!
          </Text>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={6}>
          <TextInput label="Business Title"></TextInput>
        </Grid.Col>
        <Grid.Col span={6}>
          <InputWrapper label="City">
            <Input component="select" rightSection={<ChevronDown />}>
              <option value="islamabad">Islamabad</option>
              <option value="rawalpindi">Rawalpindi</option>
            </Input>
          </InputWrapper>
        </Grid.Col>

        <Grid.Col>
          {" "}
          <Textarea
            label="About You"
            placeholder="Provide a brief description about yourself and the services you have been providing e.g. 'We Have been established since 2006 and have provided over 200 bookings in the past year.'"
          ></Textarea>
        </Grid.Col>
        <Grid.Col>
          <TextInput label="Your Address"></TextInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Mobile Number"></TextInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Feedback Email Address"></TextInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Facebook Link"></TextInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Whatsapp Number"></TextInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Instagram Link"></TextInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Your Contact Number"></TextInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Telephone Number"></TextInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Complaint Email Address"></TextInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Twitter Link"></TextInput>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={2}>
          <Button style={{ backgroundColor: "#04396C" }} leftIcon={<Photo />}>
            Upload Images
          </Button>
        </Grid.Col>

        <Grid.Col span={2}>
          <Button
            onClick={() => openRef.current()}
            style={{ backgroundColor: "#04396C" }}
            leftIcon={<Video />}
          >
            Upload Videos
          </Button>
        </Grid.Col>
      </Grid>
      <Grid style={{ borderBottom: "1px solid #EAEAEA" }}>
        <Grid.Col>
          <Title order={3}>Uploaded Images</Title>
        </Grid.Col>
        <Grid.Col span={3}>
          {" "}
          <Image
            radius="md"
            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Random unsplash image"
          />
        </Grid.Col>
        <Grid.Col span={3}>
          {" "}
          <Image
            radius="md"
            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Random unsplash image"
          />
        </Grid.Col>
        <Grid.Col span={3}>
          {" "}
          <Image
            radius="md"
            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Random unsplash image"
          />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col>
          <Button
            onClick={() => openRef.current()}
            style={{ backgroundColor: "#04396C" }}
            leftIcon={<CircleCheck />}
          >
            Register to Service
          </Button>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default DjandMusic;
