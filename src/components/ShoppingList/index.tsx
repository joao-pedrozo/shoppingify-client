import { Flex, IconButton, Text, Badge } from '@chakra-ui/react';
import { useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

export const ShoppingList = () => {
  const [count] = useState(3);

  return (
    <Flex w="full" justify="center">
      <IconButton
        position="relative"
        w="42px"
        h="42px"
        borderRadius="50%"
        color="white"
        bg="#F9A109"
        _hover={{ bg: '#FF8E22' }}
        _active={{ bg: '#D5771D' }}
        aria-label={'Shopping cart'}
        icon={
          <>
            <MdOutlineShoppingCart fontSize={22} />

            <Badge
              position="absolute"
              left="34px"
              top="-5px"
              p="2px 6px"
              borderRadius="4px"
              variant="solid"
              bg="#EB5757"
            >
              <Text fontSize={12}>{count}</Text>
            </Badge>
          </>
        }
      />
    </Flex>
  );
};
