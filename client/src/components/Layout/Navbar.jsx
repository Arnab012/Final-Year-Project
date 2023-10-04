import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu4Fill } from 'react-icons/ri';

const user = {
  role: 'Admin',
};

const LinkButton = ({ url = '/', title = 'Home', onClose }) => {
  return (
    <Link to={url} onClick={onClose}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
};

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const logOutHandler = () => {
    console.log('logout');
    onClose();
  };

  const isAuthenticated = false;

  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        zIndex={'overlay'}
        colorScheme="yellow"
        height={'12'}
        width={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu4Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={'1px'}>Meddy_Buddy</DrawerHeader>

          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/doctors"
                title="Browse All Doctor"
              />
              <LinkButton
                onClose={onClose}
                url="/request_appoiintment"
                title="Request a Appointment"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile" onClick={onClose}>
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button
                          onClick={logOutHandler}
                          colorScheme="red"
                          variant={'ghost'}
                        >
                          <RiLogoutBoxLine /> LogOut
                        </Button>
                      </HStack>
                      {user && user.role === 'Admin' && (
                        <Link to="/admin/dashboard" onClick={onClose}>
                          <Button variant={'ghost'} colorScheme="purple">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            DashBoard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={onClose}>
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/register" onClick={onClose}>
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
