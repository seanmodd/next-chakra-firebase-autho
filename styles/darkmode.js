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

export const MyDarkModeSwitch = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'gray.300',
    dark: 'black',
  };
  return (
    <>
      <IconButton
        aria-label="Toggle Dark Switch"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        color={iconColor[colorMode]}
        bg={bgColor[colorMode]}
      >
        {children}
      </IconButton>
    </>
  );
};


