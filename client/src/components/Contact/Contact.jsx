import React, { useState } from 'react';
import {
  Heading,
  Container,
  VStack,
  Box,
  Input,
  Button,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handelupsubmit = e => {
    const Usermessage = {
      name,
      email,
      message,
    };
    e.preventDefault();
    console.log('UserMessage', Usermessage);
  };

  return (
    <>
      <Container h={'92vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading children={'Contact Us'} />
          <form style={{ width: '100%' }} onSubmit={handelupsubmit}>
            <Box>
              <FormLabel htmlFor="name" children={'Name'} />
              <Input
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="abc"
                type="text"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box>
              <FormLabel htmlFor="email" children={'Email Address'} />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type="email"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box>
              <FormLabel htmlFor="Message" children={'Message'} />
              <Textarea
                required
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Write Your Message"
                type="text"
                focusBorderColor="yellow.500"
              />
            </Box>

            <Box display={'flex'} justifyContent={'center'}>
              <Button my={'4'} colorScheme={'yellow'} type="submit">
                Send Mail
              </Button>
            </Box>

            <Box my={'4'} display={'flex'} justifyContent={'flex-end'}>
             want to Take Experience
              <Link to="/">
                <Button colorScheme="yellow" variant={'link'}>
                  Click{' '}
                </Button>{' '}
                Here
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
}

export default Contact;
