import { useRouter } from 'next/router';
import {
  Button,
  ButtonGroup,
  VStack,
  Box,
  HStack,
  useColorMode,
} from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight, FaRegMoon, FaRegSun } from 'react-icons/fa';
import { MyButton, NewButton } from 'styles/myChakra';

const Actions = ({ switchName }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: '#bbbfff86',
    dark: '#001db1',
  };
  const color = {
    light: 'black',
    dark: 'white',
  };

  let actions = (
    <>
      <Box
        onClick={toggleColorMode}
        leftIcon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
      >
        <NewButton>{colorMode === 'dark' ? 'Dark' : 'Light'} Mode</NewButton>
      </Box>
      <Button
        rightIcon={<FaAngleRight />}
        onClick={() =>
          router.push(switchName === 'Second Page' ? '/other/second' : '/other')
        }
        bg={bgColor[colorMode]}
        color={color[colorMode]}
      >
        {switchName}
      </Button>
      <NewButton>what</NewButton>
    </>
  );

  if (switchName === 'First Page') {
    actions = (
      <>
        <VStack>
          <HStack>
            <Button
              leftIcon={<FaAngleLeft />}
              onClick={() =>
                router.push(
                  switchName === 'Second Page' ? '/other/second' : '/other'
                )
              }
            >
              {switchName}
            </Button>

            <Button
              rightIcon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
          </HStack>
          <Button onClick={() => router.push('/')}>
            Learn Static-Side Generation
          </Button>
        </VStack>
      </>
    );
  }

  return <ButtonGroup>{actions}</ButtonGroup>;
};

export default Actions;
