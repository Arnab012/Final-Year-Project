import React from 'react';
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';

// import {DiGithub} from "react-icons/di"
import {
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
  TiSocialFacebook,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <>
      <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'} marginTop={'10'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={['center', 'flex-start']} width="full">
            <Heading children="All Rights is Reserved " color={'white'} />
            <Heading
              children="@Meddy_Buddy "
              fontFamily={'body'}
              size={'sm'}
              color={'yellow.900'}
            />
          </VStack>

          <HStack
            justifyContent={'center'}
            spacing={['2', '10']}
            color={'white'}
            fontSize={'50'}
          >
            <a
              href="https://www.linkedin.com/in/arnab-kumar-hansda-732540202/?originalSubdomain=in"
              target="blank"
            >
              <TiSocialLinkedinCircular />
            </a>

            <a href="https://www.instagram.com/arnab_kumar_121/" target="blank">
              <TiSocialInstagramCircular />
            </a>

            <a href="https://www.facebook.com/arnab.hansda.96" target="blank">
              <TiSocialFacebook />
            </a>
            <a href="https://github.com/Arnab012" target="blank">
              <TiSocialGithubCircular />
            </a>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
