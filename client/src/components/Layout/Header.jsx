import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Button, Container } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
const Header = () => {
  const isAuthenticated = false;
  return (
    <>
      <Container
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        height={'60px'}
      >
        <Box
          display={'flex'}
          position={'fixed'}
          top={'4'}
          alignItems={'center'}
          justifyContent={'center'}
          right={'4'}
          marginRight={'12'}
          marginBottom={'10'}
        >
          {isAuthenticated ? (
            <Button colorScheme="telegram" marginRight={'4'} p={'5'}>
              <Link to="/">
                <FiLogOut />
              </Link>
            </Button>
          ) : (
            <>
              <Box>
                <Button colorScheme={'facebook'} p={'5'} marginRight={'5'}>
                  <Link to={'/login'}>Login</Link>
                </Button>
                <Button p={'5'}>
                  <Link to={'/register'}>Signup</Link>
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Header;
