import {
  Heading,
  HStack,
  Link,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();
  const snippets =
    'https://marketplace.visualstudio.com/items?itemName=willstakayama.vscode-nextjs-snippets';
  const othernextsnippets =
    'https://marketplace.visualstudio.com/items?itemName=pulkitgangwar.nextjs-snippets';
  return (
    <VStack
      py={4}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      transition="background 100ms linear"
    >
      <HStack fontSize="sm">
        <Link
          textDecoration="underline"
          href={snippets}
          isExternal
          color="blue.500"
        >
          Next JS snippets!
        </Link>

        <Link
          textDecoration="underline"
          href={othernextsnippets}
          isExternal
          color="blue.500"
        >
          MORE Next JS snippets!
        </Link>
      </HStack>
      <HStack fontSize="sm" fontWeight="600">
        <Text>Created by</Text>
        <Link href="https://github.com/seanmodd" isExternal>
          Sean Modd
        </Link>
      </HStack>
    </VStack>
  );
};

export default Footer;
