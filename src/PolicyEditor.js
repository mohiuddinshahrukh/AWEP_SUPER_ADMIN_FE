import { Paper, Button, Grid, Modal } from "@mantine/core";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { RichTextEditor } from "@mantine/rte";
import "./PolicyEditor.css";
import {
  Text,
  InputWrapper,
  Input,
  NumberInput,
  Title,
  PasswordInput,
} from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { Group } from "@mantine/core";

import { ArrowRight } from "tabler-icons-react";
import { ThumbUp } from "tabler-icons-react";
const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";
const PolicyEditor = () => {
  const [value, onChange] = useState(initialValue);
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  let navigate = useNavigate();

  return (
    <Paper>
      <Modal
        align="center"
        opened={opened}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        // onClose={() => navigate("/customers")}
        size="lg"
      >
        <Title p="md" order={3}>
          Congrats!!
        </Title>
        <Text p="md" align="center" size="xl">
          Are You Sure You Want to Discard All Changes?
        </Text>
        <Button
          m="md"
          type="submit"
          size="md"
          variant="filled"
          color="dark"
          rightIcon={<ThumbUp />}
          onClick={() => setOpened(false)}
        >
          No, Keep Changes
        </Button>
        <Button
          m="md"
          type="submit"
          size="md"
          variant="filled"
          color="red"
          rightIcon={<ThumbUp />}
          onClick={() => navigate("/")}
        >
          Yes, Discard
        </Button>
      </Modal>
      <RichTextEditor value={value} onChange={onChange} style={{height:"80vh"}} />
      <div className="button">
        <Button
          m="md"
          type="submit"
          size="md"
          variant="filled"
          color="red"
          // rightIcon={<ArrowRight />}
          onClick={() => setOpened(true)}
        >
          Cancel Changes
        </Button>
        <Button
          m="md"
          type="submit"
          size="md"
          variant="filled"
          color="light"
          // rightIcon={<ArrowRight />}
        >
          Save Policy
        </Button>
      </div>
    </Paper>
  );
};

export default PolicyEditor;
