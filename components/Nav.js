import { useRouter } from 'next/router';
import {
  Button,
  HStack,
  VStack,
  Box,
  useColorMode,
  Text,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { MyDarkModeSwitch, Toggle } from 'styles/darkmode';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import Home from './other/Home';

const Nav = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Home />
      {user && (
        <>
          <Link href="/">
            <Text fontSize="4xl" color="red" mr={8}>
              Dashboard
            </Text>
          </Link>
          <Box as="button" onClick={logout}>
            <Text fontSize="md" mr={8}>
              Logout
            </Text>
          </Box>
        </>
      )}
      {!user && (
        <>
          <Link href="/other/second">
            <Text fontSize="md" mr={8}>
              Third Page
            </Text>
          </Link>
        </>
      )}
    </>
  );
};
export default Nav;
