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
// {const { colorMode, toggleColorMode } = useColorMode();
// const bgColor = {
//   light: 'blue.500',
//   dark: 'red.500',
// };
// const myColor = bgColor[colorMode];
// }

const BadgeButton = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: 10px;

  margin-bottom: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid white;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.bg};
  }

  &:focus {
    outline: none;
  }
  &:active {
    color: green;
  }
`;

const LoadButton = styled(BadgeButton)`
  font-size: 12px;
  font-weight: light;
  letter-spacing: 6px;
`;

export { BadgeButton, LoadButton };

//! This is where the theme is created --------- //!

const breakpoints = createBreakpoints({
  sm: '425px',
  md: '768px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1440px',
});

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', ${defaultTheme.fonts.heading}`,
    body: `'Raleway', ${defaultTheme.fonts.body}`,
  },
  breakpoints,
  // components: {
  //   Button: {
  //     // 1. We can update the base styles
  //     baseStyle: {
  //       fontWeight: '600',
  //       // textTransform: 'uppercase',
  //       // textColor: '#0e11e6',
  //       borderWidth: '1px',
  //       borderRadius: 'base',
  //       boxShadow: 'base',
  //       // borderColor: 'black',
  //       transition: 'all 50000ms ease-in-out(0.23, 1, 0.32, 1) 2ms',
  //       // hover: 'blue.500',
  //     },

  //     defaultProps: {
  //       // colorScheme: 'tomato',
  //       variant: 'ghost',
  //     },
  //   },
  // },
  // colors: {
  //   black: '#2e2e2e',
  //   white: '#f1f1f1',
  //   whitebg: '#c0c0c0',
  //   blackbg: '#16161d92',
  // },
  // fonts: {
  //   heading: 'Arimo',
  //   body: 'Poppins',
  // },

  // fontSizes: {
  //   lg: '20px',
  //   xl: '30px',
  //   '2xl': '40px',
  //   '3xl': '50px',
  // },
  // breakpoints,
  // icons: {
  //   logo: {
  //     path: (
  //       <svg
  //         width="3000"
  //         height="3163"
  //         viewBox="0 0 3000 3163"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <rect width="3000" height="3162.95" fill="none" />
  //         <path
  //           d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
  //           fill="currentColor"
  //         />
  //       </svg>
  //     ),
  //     viewBox: '0 0 3000 3163',
  //   },
  // },
});

export default theme;
