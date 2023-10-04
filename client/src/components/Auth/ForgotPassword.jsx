import React, { useState } from 'react';

import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onsubmithandel = e => {
    e.preventDefault();
    console.log('Email:', email);

    alert('Password Send SuccessFully');
  };

  return (
    <>
      <Container py={'16'} height={'80vh'}>
        <form onSubmit={onsubmithandel}>
          <Heading
            display={'flex'}
            justifyContent={'center'}
            my="16"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Forgot Password
          </Heading>
          <VStack spacing={'8'}>
            <Input
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              pattern="[^ @]*@[^ @]*"
              focusBorderColor="yellow.500"
            />

            <Button type="submit" w={'full'} colorScheme="yellow">
              Submit
            </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ForgotPassword;
