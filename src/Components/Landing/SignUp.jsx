import React from 'react'
import { Flex, Box, Text, Image, TextInput, Title, PasswordInput, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";


function SignUp() {

  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/")
  }

  const handleCreateAccount = () => {
    navigate("/otp")
  }


  return (
    <div>
      <Flex>

        <Flex style={{ width: "100vw" }} justify={"center"} align={"center"}>

          <Box style={{ width: "280px" }}>
            <Title order={1}>Sign Up</Title>
            <TextInput
              mt={10}
              label="Name"
            />
            <TextInput
              mt={10}
              label="Phone No"
            />
            <TextInput
              mt={10}
              label="Email"
            />

            {/* <PasswordInput
              my={10}
              label="Create Password"
              placeholder="Your Password"
            />

            <PasswordInput
              my={10}
              label="Confirm Password"
              placeholder="Your Password"
            /> */}

            <Button color='dark' mt={10} fullWidth onClick={handleCreateAccount}>Create Account</Button>

            <Flex mt={10}>
              <Text c="dimmed" size="xs">Already Have an Account?</Text>
              <Text onClick={handleLogOut} style={{ cursor: "pointer" }} c="dimmed" ml={5} size="xs" td="underline">Sign In</Text>
            </Flex>
          </Box>

        </Flex>

        <Image
          style={{ width: "50vw", height: "100vh", padding: "100px" }}
          src="https://notioly.com/wp-content/uploads/2023/11/314.Education.png"
        />


      </Flex>
    </div>
  )
}

export default SignUp