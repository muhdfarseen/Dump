import React, { useState } from 'react';
import { Flex, Box, Text, Image, TextInput, Title, PasswordInput, Button } from '@mantine/core';
import "./CheckOTP.css";

export const CheckOTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handlechange = (e, index) => {

    const value = e.target.value;
    if (isNaN(value) && value !== "") return false;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }

    // if (e.nativeEvent.inputType === "deleteContentBackward" && e.target.previousSibling) {
    //   e.target.previousSibling.focus();
    // }

  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowLeft' && index > 0) {
      e.target.previousSibling.focus();
    }
    if (e.key === 'ArrowRight' && index < otp.length - 1) {
      e.target.nextSibling.focus();
    }
    if (e.key === 'ArrowDown' && index > 0) {
      e.target.previousSibling.focus();
    }
    if (e.key === 'ArrowUp' && index < otp.length - 1) {
      e.target.nextSibling.focus();
    }

    if (e.key === 'Backspace' && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  return (
    <div>

      <Flex gap={10} style={{ height: "100vh", width: "100vw" }} direction={"column"} justify={"center"} align={"center"}>

        <Flex direction={"column"} justify={"center"} align={"center"}>
        <Title order={1}>Enter OTP</Title>
          <Text size='xs' c={"dimmed"}>OTP has been sent to dummy@mail.com</Text>
        </Flex>
       
        <Box>
          {otp.map((data, i) => {
            return (
              <input
                key={i}
                onChange={(e) => handlechange(e, i)}
                onKeyUp={(e) => handleKeyDown(e, i)}
                value={data}
                className='ipbox'
                type='text'
                maxLength={1}
                style={{ margin: "5px" }}
              />
            );
          })}
        </Box>

        <Button color='dark' size='sm'>Submit</Button>
      </Flex>


    </div>
  );
};
