import { Button, Flex } from '@chakra-ui/react';
import {MdOutlineShoppingCart} from 'react-icons/md'

export const ShoppingList = () => {
    return (
        <Flex h="42px" w="42">
        
        <Button
            h="full"
            w="full"
            backgroundColor="#F9A109"
            borderRadius="50%"
            color={'white'}

        >
            <MdOutlineShoppingCart fontSize={20} />
        
        </Button>
    </Flex>
    );
};