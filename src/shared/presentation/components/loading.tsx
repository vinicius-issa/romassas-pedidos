import React from "react";
import { Center, Spinner } from "@reverb-ui/react";

const Loading = () => (
  <Center w="100%" h="100%" display="flex" flex="1">
    <Spinner />{" "}
  </Center>
);

export default Loading;
