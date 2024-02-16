import React from 'react';
import { Flex } from '@mantine/core';
import "./CheckOTP.css"

export const CheckOTP = () => {
  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < 6; i++) {
      inputs.push(<input className='ipbox' key={i} type="text" />);
    }
    return inputs;
  };

  return (
    <div>
      <Flex gap={10} style={{ height: "100vh", width: "100vw" }} justify={"center"} align={"center"}>
        {renderInputs()}
      </Flex>
    </div>
  );
};
