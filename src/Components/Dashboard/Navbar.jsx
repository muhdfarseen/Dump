import React from "react";
import { Text, Paper, Avatar, Flex } from "@mantine/core";

export const Navbar = () => {
  return (
    <div>
      <Paper shadow="xs" p="sm" px={30}>
        <Flex justify={"space-between"} align={"center"}>
          <Text fw={700}>Admin DashBoard</Text>

          <Flex gap={10} justify={"flex-end"} align={"center"}>
            <Text>Dummy Name</Text>
            <Avatar
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg"
              alt="it's me"
            />
          </Flex>
        </Flex>
      </Paper>
    </div>
  );
};
