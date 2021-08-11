import { HStack, Link, Text, useColorMode } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Star = () => {
  const { colorMode } = useColorMode();

  return (
    <Link href="https://github.com/seanmodd/nextjsevents" isExternal>
      <HStack
        zIndex="docked"
        pos="fixed"
        top="10"
        left="10"
        py={3}
        px={4}
        bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
        borderWidth="3px"
        opacity={0.75}
        borderColor={colorMode === 'light' ? 'gray.800' : 'gray.100'}
        borderRadius="3xl"
      >
        <FaGithub size="24px" />
        <Text fontWeight="600">Star me on GitHub</Text>
      </HStack>
    </Link>
  );
};

export default Star;
