import React from 'react';
import {
  VStack,
  Stack,
  Text,
  Avatar,
  Heading,
  Container,
  Button,
  HStack,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import introVideo from '../../asset/intro.mp4';
import myLogo from '../../asset/logo.png';

import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../asset/Docs/termsAndCondition';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar src={myLogo} boxSize={['40', '48']} />
        <Text children="Co-Founder" opacity={0.7} />
      </VStack>

      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading
          display={'flex'}
          justifyContent={'center'}
          children="Meddy_Buddy"
          size={['md', 'xl']}
        />
        <Text
          textAlign={['center', 'left']}
          children="This is the Best Hospital who Cares About Yours Health"
        />
      </VStack>
    </Stack>
  );
};

const TandC = ({ termsAndCondition }) => {
  return (
    <Box>
      <Heading
        size={'md'}
        children={'Terms & Condition'}
        textAlign={['center', 'left']}
        my={'4'}
      />
      <Box h={'sm'} p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndCondition}
        </Text>
        <Heading my={'4'} size={'sm'} children="We Care About You" />
      </Box>
    </Box>
  );
};

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading
        display={'flex'}
        justifyContent={'center'}
        children="About US"
        textAlign={['center', 'left']}
      />

      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          we Are The One Who Care About You
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            <Link to={'/'}>Want to Experience</Link>
          </Button>
        </Link>
      </Stack>
      <video
        autoPlay
        muted
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my={'4'} padding={'4'}>
        <RiSecurePaymentFill size={'16'} />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children="Payment is Secured BY RazorPay"
        />
      </HStack>
    </Container>
  );
};

export default About;
