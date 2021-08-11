import Link from 'next/link';
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import PageContainer from 'components/other/PageContainer';
import Actions from 'components/other/Actions';
import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MyDarkModeSwitch, BadgeButton, LoadButton } from 'styles/theme';
import { MyButton } from 'styles/myChakra';
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

const VisitEvents = () => (
  <Link href="/myindex">
    <a>
      <MyButton>Visit The Events App!</MyButton>
    </a>
  </Link>
);
const AllEvents = () => (
  <Link href="/events">
    <a>
      <MyButton>See ALL Events!</MyButton>
    </a>
  </Link>
);

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
      <PageContainer title="Next.js Chakra Starter">
        <HStack py={15}>
          <VisitEvents /> <AllEvents />{' '}
          <MyButton>
            <Link href="/">Here</Link>
          </MyButton>
        </HStack>
        <Actions switchName="Second Page" />
        <VStack spacing={1}>
          <form>
            <VStack align="center" justify="center" spacing={15}>
              <Heading color={color[colorMode]}>Sample Header </Heading>

              <BadgeButton bg={bgColor[colorMode]} color={color[colorMode]}>
                SAMPLE BUTTON
              </BadgeButton>
              <br />
            </VStack>
          </form>
          <Button bg={bgColor[colorMode]} color={color[colorMode]}>
            SAMPLE BUTTON
          </Button>
        </VStack>
      </PageContainer>
    </>
  );
}
