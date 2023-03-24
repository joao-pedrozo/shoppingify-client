import { Box, Button, Flex, Tooltip } from '@chakra-ui/react';
import React from 'react';

type NavigationItemProps = {
  active: string;
  onClick: (id: string) => void;
  id: string;
  children: React.ReactElement;
};

export const NavigationItem = ({
  active,
  onClick,
  id,
  children,
}: NavigationItemProps) => {
  return (
    <Flex
      h="46px"
      w="full"
      marginBottom="30px"
      _hover={{
        background: '#f6f6f6',
      }}
    >
      <Box
        w="8px"
        borderRadius="0 4px 4px 0"
        borderColor="#F9A109"
        borderRightColor="#F9A109"
        backgroundColor={active === id ? '#F9A109' : '#ffffff00'}
      ></Box>
      <Tooltip label={id} placement="right" hasArrow gutter={-8}>
        <Button
          padding="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="#ffffff00"
          w="full"
          h="full"
          color="#454545"
          onClick={() => onClick(id)}
          _hover={{
            background: '#f6f6f6',
          }}
        >
          {children}
        </Button>
      </Tooltip>
    </Flex>
  );
};
