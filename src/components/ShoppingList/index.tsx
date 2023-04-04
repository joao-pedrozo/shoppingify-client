import { Flex, Button, Text, Badge } from '@chakra-ui/react';
import { useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

export const ShoppingList = () => {
  const [count] = useState(3);

  return (
    <Flex w="full" justify="center">
      <Button
        position="relative"
        w="46px"
        h="46px"
        borderRadius="50%"
        color="white"
        bg="#F9A109"
        _hover={{ bg: '#f5bb4b' }}
        _active={{
          bg: '#f5bb4b',
        }}
      >
        <Text fontSize={24}>
          <MdOutlineShoppingCart />
        </Text>

        <Badge
          position="absolute"
          left="34px"
          top="-6px"
          p="2px 6px"
          borderRadius="4px"
          variant="solid"
          bg="#EB5757"
        >
          <Text fontSize={12}>{count}</Text>
        </Badge>
      </Button>
    </Flex>
  );
};
