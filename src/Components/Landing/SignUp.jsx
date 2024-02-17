import React from 'react'
import { Flex, Box, Text, Image, TextInput, Title, PasswordInput, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.phno) {
    errors.phno = 'Required';
  } else if (values.phno.length != 10) {
    errors.phno = 'Must be 10 digit';
  }
  else if (!/^\d+$/.test(values.phno)) {
    errors.phno = 'Must contain only numbers';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.cretpassword) {
    errors.cretpassword = 'Required';
  } else if (values.cretpassword.length < 8) {
    errors.cretpassword = 'Must be 8 characters or more';
  }

  if (!values.confpassword) {
    errors.confpassword = 'Required';
  } else if (values.confpassword != values.cretpassword) {
    errors.confpassword = 'Password must me same as above';
  }

  return errors;
};

function SignUp() {

  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/")
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phno: '',
      email: '',
      cretpassword: '',
      confpassword: '',
    },
    validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      navigate("/otp")
    },
  });

  return (
    <div>

      <Flex style={{ width: "100vw", height: "100vh" }} gap={90} justify={"center"} align={"center"}>
        <Image
          style={{ width: "25vw" }}
          src="https://notioly.com/wp-content/uploads/2023/11/314.Education.png"
        />

        <Box style={{ width: "280px" }}>
          <Title order={1}>Sign Up</Title>
          <TextInput
            mt={10}
            label="Name"
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name ? <>{formik.errors.name}</> : null}
          />
          <TextInput
            mt={10}
            label="Phone No"
            name='phno'
            onChange={formik.handleChange}
            value={formik.values.phno}
            error={formik.errors.phno ? <>{formik.errors.phno}</> : null}
          />
          <TextInput
            mt={10}
            label="Email"
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email ? <>{formik.errors.email}</> : null}
          />

          <PasswordInput
            my={10}
            label="Create Password"
            placeholder=""
            name='cretpassword'
            onChange={formik.handleChange}
            value={formik.values.cretpassword}
            error={formik.errors.cretpassword ? <>{formik.errors.cretpassword}</> : null}
          />

          <PasswordInput
            my={10}
            label="Confirm Password"
            placeholder=""
            name='confpassword'
            onChange={formik.handleChange}
            value={formik.values.confpassword}
            error={formik.errors.confpassword ? <>{formik.errors.confpassword}</> : null}
          />

          <Button onClick={formik.handleSubmit} color='dark' mt={10} fullWidth>Create Account</Button>

          <Flex mt={10}>
            <Text c="dimmed" size="xs">Already Have an Account?</Text>
            <Text onClick={handleLogOut} style={{ cursor: "pointer" }} c="dimmed" ml={5} size="xs" td="underline">Sign In</Text>
          </Flex>

        </Box>
      </Flex>

    </div>
  )
}

export default SignUp