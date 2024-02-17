import React from 'react'
import { Flex, Box, Text, Image, TextInput, Title, PasswordInput, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be atleast 8 characters';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

function SignIn() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            navigate("/home")
        },
    });


    const handleSignUpclick = () => {
        navigate("/signup")
    }

    return (
        <div>
            <Flex style={{ width: "100vw", height: "100vh" }} gap={90} justify={"center"} align={"center"}>
                <Image
                    style={{ width: "25vw" }}
                    src="https://notioly.com/wp-content/uploads/2023/04/228.Robot_.png"

                />
                <Box style={{ width: "280px" }}>
                    <Title order={1}>Sign In</Title>
                    <TextInput
                        mt={10}
                        label="Email"
                        placeholder=""
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.errors.email ? <>{formik.errors.email}</> : null}
                    />
                    <PasswordInput
                        my={10}
                        label="Password"
                        placeholder=""
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.errors.password ? <>{formik.errors.password}</> : null}
                    />
                    <Button color='dark' fullWidth onClick={formik.handleSubmit}>Sign In </Button>
                    <Flex mt={10}>
                        <Text c="dimmed" size="xs">Dont have an Account?</Text>
                        <Text onClick={handleSignUpclick} style={{ cursor: "pointer" }} c="dimmed" ml={5} size="xs" td="underline">SignUp</Text>
                    </Flex>
                </Box>
            </Flex>
        </div>
    )
}

export default SignIn