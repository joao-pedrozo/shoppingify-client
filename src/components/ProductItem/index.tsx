import { Fragment } from 'react';
import { ListIcon, ListItem, Text } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';


type ProductItemProps = {
    items: Array<string>;
}

export const ProductItem = ({ items }: ProductItemProps) => {
    return (
        <Fragment>
            {items.map((item, index) => (
                <ListItem
                    key={index}
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    flexGrow='1'
                    p='15px'
                    lineHeight='20px'
                    maxW='182px'
                    minW='182px'
                    bg='#fff'
                    boxShadow='sm'
                    borderRadius='12px'
                    fontSize='16px'
                >
                    <Text pr='10px'> {item} </Text>
                    <button>
                        <ListIcon as={FaPlus} color='#C1C1C4' fontSize="sm" marginEnd='0' />
                    </button>
                </ListItem>
            ))}
        </Fragment>
    )
};