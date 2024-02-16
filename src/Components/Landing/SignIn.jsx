import React from 'react'
import { Flex, Box, Text, Image, TextInput, Title, PasswordInput, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";

function SignIn() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/home")
    }

    const handleSignUpclick = () => {
        navigate("/signup")
    }

    return (
        <div>

            <Flex>
                <Image
                    style={{ width: "50vw", height: "100vh" }}
                    src="https://img.freepik.com/free-photo/3d-cartoon-background-children_23-2150473313.jpg?w=1380&t=st=1708077014~exp=1708077614~hmac=eafbded39c797bb7ed301b0a68d26524250772cfb761b89c1c4000688a991681"
                />
                <Flex style={{ width: "100vw" }} justify={"center"} align={"center"}>
                    <Box style={{ width: "280px" }}>
                        <Title order={1}>Sign In</Title>
                        <TextInput
                            mt={10}
                            label="Email"
                            placeholder="Input placeholder"
                        />
                        <PasswordInput
                            my={10}
                            label="Password"
                            placeholder="Your Password"
                        />
                        <Button fullWidth onClick={handleLoginClick}>Sign In </Button>

                        <Flex mt={10}>
                            <Text c="dimmed" size="xs">Dont have an Account?</Text>
                            <Text onClick={handleSignUpclick} style={{ cursor: "pointer" }} c="dimmed" ml={5} size="xs" td="underline">SignUp</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>

        </div>
    )
}

export default SignIn