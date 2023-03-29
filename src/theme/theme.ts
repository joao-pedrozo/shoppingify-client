import { extendTheme } from '@chakra-ui/react';
import { Quicksand } from '@next/font/google';

const nextFont = Quicksand({
  weight: ['500', '700'],
  subsets: ['latin'],
});

export const theme = extendTheme({
  fonts: {
    body: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,
  },
});
