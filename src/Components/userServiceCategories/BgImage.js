import { BackgroundImage, Center, Text } from "@mantine/core";
import React from "react";

const BgImage = () => {
  return (
    <BackgroundImage
      style={{ height: "100%", width: "100%" }}
      src={require("./images/sitChair.png")}
    >
      <Center p="md">
        <Text color="#000">
          BackgroundImage component can be used to add any content on image. It
          is useful for hero headers and other similar sections
        </Text>
      </Center>
    </BackgroundImage>
  );
};

export default BgImage;
