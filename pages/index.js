import Link from 'next/link';
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import PageContainer from 'components/other/PageContainer';
import MyContainer from 'components/other/MyContainer';
import Actions from 'components/other/Actions';
import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MyDarkModeSwitch, BadgeButton, LoadButton } from 'styles/theme';
import { MyButton, NewButton } from 'styles/myChakra';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Textarea,
  VStack,
  useColorMode,
} from '@chakra-ui/react';

export default function Home() {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: '#bbbfff86',
    dark: '#001db1',
  };
  const color = {
    light: 'black',
    dark: 'white',
  };

  return (
    <>
      <MyContainer>
        <Heading bg="blue" color={color[colorMode]}>
          Sample Header
        </Heading>
        <NewButton>
          <Link href="/other">Go To The Other Pages</Link>
        </NewButton>
      </MyContainer>
    </>
  );
}
