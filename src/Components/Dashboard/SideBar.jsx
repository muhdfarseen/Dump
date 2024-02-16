import React, { useState } from "react";
import { Flex, Box, Text, Image, TextInput, Title, PasswordInput, Button, ActionIcon } from '@mantine/core';
import { IconUsers, IconSettings, IconBrandBlogger, IconLogout2 } from '@tabler/icons-react';
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { UserSettings } from "./UserSettings";
import { UserLogs } from "./UserLogs";
import { UserData } from "./UserData";


export const SideBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [Active, setActive] = useState()

    const navigate = useNavigate()

    const handlelogout = () =>{
        navigate("/")
    }

    return (

        <div>
            <Box onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ backgroundColor: "#F8F8F8", width: "fit-content" }}>
                <Flex gap={10} style={{ height: `calc(100vh - 62px)` }} direction={"column"} justify={"space-between"}>
                    <Box p={10}>
                        <Flex className="Navlink" p={10} gap={10} align={"center"}>
                            <ActionIcon variant="transparent" color='gray' aria-label="Settings">
                                <IconUsers style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                            <Text style={{ display: isHovered ? "block" : "none" }}>User Data</Text>
                        </Flex>
                        <Flex className="Navlink" p={10} gap={10} align={"center"}>
                            <ActionIcon variant="transparent" color='gray' aria-label="Settings">
                                <IconBrandBlogger style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                            <Text style={{ display: isHovered ? "block" : "none" }}>User Logs</Text>
                        </Flex>
                        <Flex className="Navlink" p={10} gap={10} align={"center"}>
                            <ActionIcon variant="transparent" color='gray' aria-label="Settings">
                                <IconSettings style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                            <Text style={{ display: isHovered ? "block" : "none" }}>User Settings</Text>
                        </Flex>
                    </Box>
                    <Box p={10}>
                        <Flex className="Navlink" p={10} gap={10} align={"center"}>
                            <ActionIcon variant="transparent" color='red' aria-label="Settings">
                                <IconLogout2 style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                            <Text style={{ display: isHovered ? "block" : "none" }} c={"red"} onClick={handlelogout}>Log Out</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </div>
    );
};
