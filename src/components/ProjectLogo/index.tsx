import { Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';
import Logo from 'public/images/logo.png';

export const ProjectLogo = () => {
  return (
    <Flex w="full" justify="center">
      <Box cursor="pointer">
        <Image
          alt="ShoppingiFy Logo"
          src={Logo}
          width="42"
          height="42"
          draggable="false"
        />
      </Box>
    </Flex>
  );
};
