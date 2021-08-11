import { Heading, Text, useColorMode, VStack } from '@chakra-ui/react';

const PageContainer = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <VStack spacing={15} paddingTop={['3%', '4%', '5%']} minH="90vh">
      {children}
    </VStack>
  );
};

export default PageContainer;
