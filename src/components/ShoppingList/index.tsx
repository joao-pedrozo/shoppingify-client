import { Button, Flex, Badge, Text } from '@chakra-ui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useState } from 'react';
export const ShoppingList = () => {
  //Counting will be recieved from another component
  const [count] = useState(4);
  return (
    <Flex>
      <Button
        backgroundColor="#F9A109"
        borderRadius="50%"
        w="35"
        h="45"
        color={'white'}
      >
        <MdOutlineShoppingCart fontSize={20} />
        <Badge
          pos={'absolute'}
          left="35px"
          top="-5px"
          variant="solid"
          bg="red"
          borderRadius="4px"
          px={'5px'}
          py="1px"
        >
          <Text color="#FFFFFF" fontSize="16">
            {count}
          </Text>
        </Badge>
      </Button>
    </Flex>
  );
};
