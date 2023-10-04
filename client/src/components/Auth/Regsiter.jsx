import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Select,
} from '@chakra-ui/react';

export const fileUplodecss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUplodecss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagepreview, setImagepreview] = useState('');
  const [image, setImage] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const roles = ['Doctor', 'Patient', 'Nurse', 'Admin', 'Pharmacist'];

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagepreview(reader.result);
      setImage(file);
    };
  };

  const navigate = useNavigate();

  const handleSubmit = async values => {
    try {
      const res = await axios.post('/api/v1/register', values);
      if (res.data.success) {
        console.log('Registered Sucessfully');
        navigate('/login');
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
      console.log('Something Went Wrong');
    }
  };

  return (
    <>
      <Container h={'105vh'} padding={'8'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading children={'Registration'} />

          <Box my="4" display={'flex'} justifyContent={'center'}>
            <Avatar src={imagepreview} size={'2xl'} />
          </Box>

          <Box marginy={'4'}>
            <form style={{ width: '100%' }} onSubmit={handleSubmit} marginy="8">
              <Box>
                <FormLabel htmlFor="name" children={'Your Name'} />
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
              <Box>
                <FormLabel
                  htmlFor="chooseAvatar"
                  children={'Choose Your Avatar'}
                />

                 <Input
                  accept="image/*"
                   required
                   css={fileUploadStyle}
                  id="chooseAvatar"
                  type={'file'}
                  focusBorderColor="yellow.500"
                onChange={changeImageHandler}
                /> 
                </Box>

              <Box>
                <FormLabel htmlFor="Role" children={'Select Role'} />
                <Select
                  required
                  id="role"
                  value={selectedRole}
                  onChange={e => setSelectedRole(e.target.value)}
                  placeholder="Select Role"
                  focusBorderColor="yellow.500"
                >
                  <option value=""></option>
                  {roles.map(role => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </Select>
              </Box>

              <Box display={'flex'} justifyContent={'center'}>
                <Button my={'4'} colorScheme={'yellow'} type="submit">
                  Sign Up
                </Button>
              </Box>

              <Box my={'4'} display={'flex'} justifyContent={'flex-end'}>
                Already Have an Account?{' '}
                <Link to="/login">
                  <Button colorScheme="yellow" variant={'link'}>
                    Login Here
                  </Button>
                </Link>
              </Box>
            </form>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Register;
