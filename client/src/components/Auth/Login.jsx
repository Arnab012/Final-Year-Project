import {
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo-png.png';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    console.log('userData', userData);
  };

  const animations = {
    form: {
      initial: {
        x: '-100%',
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: '-100%',
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <>
      <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading
            children={'Welcome to  Meddy_Buddy'}
            position={'fixed'}
            top={'20'}
          />
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box marginY={'4'} position={'fixed'} left={'80'}>
              <form style={{ width: '100%' }} onSubmit={handleSubmit}>
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
                  <FormLabel htmlFor="password" children={'Password'} />
                  <Input
                    required
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    type="password"
                    focusBorderColor="yellow.500"
                  />
                </Box>

                <Box display={'flex'} justifyContent={'flex-end'}>
                  <Link to="/forgotpassword">
                    <Button variant={'link'} fontSize={'sm'}>
                      Forget Password?
                    </Button>
                  </Link>
                </Box>

                <Box display={'flex'} justifyContent={'center'}>
                  <Button my={'4'} colorScheme={'yellow'} type="submit">
                    Login
                  </Button>
                </Box>

                <Box my={'4'} display={'flex'} justifyContent={'flex-end'}>
                  New User?
                  <Link to="/register">
                    <Button colorScheme="yellow" variant={'link'}>
                      Sign Up{' '}
                    </Button>{' '}
                    Here
                  </Link>
                </Box>
              </form>
            </Box>
            <motion.div>
              <Box marginRight={'4'} position={'fixed'} top={'80'} right={'80'}>
                <Image src={logo} width={'40'} transform />
              </Box>
            </motion.div>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Login;
