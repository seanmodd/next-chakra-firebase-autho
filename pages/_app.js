import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { DefaultSeo } from 'next-seo';
import { Box, Button, ChakraProvider, HStack, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import SEO from 'next-seo.config';
import theme from 'styles/theme';
import GlobalStyle from 'styles/styles';
import 'styles/css/nprogress.css';

import Star from 'components/other/Star';
import Footer from 'components/other/Footer';
import Home from 'components/other/Home';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MotionBox = motion(Box);

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />

      <GlobalStyle>
        {/* <Star /> */}
        <Home />
        <AnimatePresence exitBeforeEnter>
          <MotionBox
            key={router.route}
            animate="enter"
            as="main"
            exit="exit"
            flexGrow={1}
            initial="initial"
            variants={{
              initial: { opacity: 0, y: -10 },
              enter: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 10 },
            }}
          >
            <Component {...pageProps} />
          </MotionBox>
        </AnimatePresence>
        <Footer />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
