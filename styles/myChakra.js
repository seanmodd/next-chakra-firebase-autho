import { FaAngleLeft, FaAngleRight, FaRegMoon, FaRegSun } from 'react-icons/fa';
import {
  theme as defaultTheme,
  extendTheme,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Button } from '@chakra-ui/button';
import '@fontsource/raleway';
import '@fontsource/poppins';
import { jsx, css } from '@emotion/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const lightHoverStyle = {
  boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
  textShadow: '1px 1px #1100ff',
  transition: 'all .2s ease-out',
  background: '#f3e8e0',
  color: 'black',
  fontWeight: '400',
};
const darkHoverStyle = {
  boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
  textShadow: '1px 1px #1100ff',
  transition: 'all .2s ease-out',
  background: '#3f00eb',
  color: '#f7f7ff',
  fontWeight: '400',
};
const pressedStyle = {
  background: '#0d00ff',
  color: '#ffff00',
  transition: 'all 0.6s ease-out',
  textShadow: '6px 6px #ff00ae',
  fontWeight: '400',
};
export const MyButton = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'blue.100',
    dark: 'red.400',
  };
  const bgHoverColor = {
    light: darkHoverStyle,
    dark: lightHoverStyle,
  };
  return (
    <>
      <Button
        transition="0.5s"
        boxShadow="3px 3px 3px 3px rgba(0, 0, 255, 0.2)"
        bg={bgColor[colorMode]}
        color={iconColor[colorMode]}
        p="10px"
        m="10px"
        _hover={bgHoverColor[colorMode]}
        _active={pressedStyle}
      >
        {children}
      </Button>
    </>
  );
};

export const NewButton = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const myLightHoverStyle = {
    boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
    textShadow: '1px 1px #1100ff',
    transition: 'all .2s ease-out',
    background: '#fa6800',
    color: 'black',
    fontWeight: '400',
  };
  const myDarkHoverStyle = {
    boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
    textShadow: '1px 1px #1100ff',
    transition: 'all .2s ease-out',
    background: '#fa6800',
    color: '#f7f7ff',
    fontWeight: '400',
  };

  const fontColor = {
    light: 'black',
    dark: 'white',
  };
  const hoverColor = {
    light: 'pink',
    dark: 'orange',
  };
  const myboxshadow = {
    light: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
    dark: '7px 7px 7px 7px  rgb(255, 0, 195)',
  };
  const mytextshadow = {
    light: '4px 4px #1100ff2d',
    dark: '4px 4px #ffffff34',
  };
  const bgColor = {
    light: 'green.500',
    dark: 'red.400',
  };
  const myhover = {
    light: myDarkHoverStyle,
    dark: myLightHoverStyle,
  };
  return (
    <Button
      // onClick={toggleColorMode}
      bg={bgColor[colorMode]}
      color={fontColor[colorMode]}
      _hover={{
        bg: hoverColor[colorMode],
        color: myhover[colorMode],
        textShadow: mytextshadow[colorMode],
        boxShadow: myboxshadow[colorMode],
        transition: 'all .2s ease-out',
      }}
      _active={pressedStyle}
    >
      {children}
    </Button>
  );
};
