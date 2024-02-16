import React from 'react'
import { Flex, Box, Text, Image, TextInput, Title, PasswordInput, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { Navbar } from '../Components/Dashboard/Navbar';
import { SideBar } from '../Components/Dashboard/SideBar';


function Home() {

    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate("/")
    }

    return (
        <div>

            <Box style={{ width: "100dvw", height: "100dvh" }}>

                <Navbar />

                <SideBar />







            </Box>



        </div>
    )
}

export default Home