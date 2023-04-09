import { Button, Flex, Badge } from '@chakra-ui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useState } from 'react';
export const ShoppingList = () => {
  //A contagem será recuperada como prop de outro componente, o número aqui é meramente ilustrativo
  const [count] = useState(4);
  return (
    <Flex h="50px">
      <Button
        h="full"
        w="full"
        backgroundColor="#F9A109"
        borderRadius="50%"
        color={'white'}
      >
        <MdOutlineShoppingCart fontSize={25} />
      </Button>
      <Badge
        textAlign="center"
        ml="35px"
        mt="-5px"
        variant="solid"
        color="white"
        bg="red"
        fontSize="16"
        h="fit-content"
        w="fit-content"
        zIndex="1"
        borderRadius="20%"
        pos="absolute"
        px={1.5}
      >
        {count}
      </Badge>
    </Flex>
  );
};
