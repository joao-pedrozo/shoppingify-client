import { Box, Image } from '@chakra-ui/react';

export const ProjectLogo = () => {
  return (
    <Box w="46px" h="46px" cursor="pointer">
      <Image
        alt="ShoppingiFy Logo"
        src="https://i.imgur.com/iQgBXbj.png"
        draggable="false"
        objectFit="cover"
      />
    </Box>
  );
};
