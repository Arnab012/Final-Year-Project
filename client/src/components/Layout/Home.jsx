import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';
import landing from '../../asset/Font.png';
import { Image } from '@chakra-ui/react';
const Home = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box marginTop={'10'}>
        <Image src={landing} />
      </Box>
    </>
  );
};

export default Home;
