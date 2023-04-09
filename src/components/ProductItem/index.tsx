import { Button, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';


type ProductItemProps = {
  id: number,
  items: Array<string>;
}

export const ProductItem = ({ id, items }: ProductItemProps) => {
  return (
    <>
      {items.map((item) => (
        <ListItem
          key={id + item}
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
          <Button bg='none' p='0'>
            <ListIcon as={FaPlus} color='#C1C1C4' fontSize="sm" marginEnd='0' />
          </Button>
        </ListItem>
      ))}
    </>
  )
};