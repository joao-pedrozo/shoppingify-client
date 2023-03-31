import { Box, Heading, UnorderedList } from '@chakra-ui/react';
import { ProductItem } from '@/components/ProductItem';

type CategoryWithItems = {
    title: string,
    items: string[],
}

export const ProductCategory = (productCategory: CategoryWithItems) => {
    const { title, items } = productCategory;
    return (
      <Box m='47px 89px 47px 80px'>
        <Heading
            as='h3'
            noOfLines={1}
            fontSize='18px'
            fontWeight='500'
            mb='18px'
        > {title} </Heading>

        <UnorderedList
            listStyleType="none"
            display="flex"
            flexWrap='wrap'
            alignItems='flex-start'
            gap={5}
            m='0'
        >
            <ProductItem items={items} />
        </UnorderedList>
    </Box >
    )
};