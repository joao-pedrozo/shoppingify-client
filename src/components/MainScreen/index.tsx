import { Box, Flex } from '@chakra-ui/react';
import { SideBar } from '@/components/SideBar';
import { SideDrawer } from '@/components/SideDrawer';
import { ProductCategory } from '@/components/ProductCategory';
import { mockListOfCategoriesWithItems } from '@/components/ProductCategory/__mock__/productCategoryData';

export const MainScreen = () => {
  return (
    <Flex bg="#fafafe" w="full" justifyContent="space-between" >
      <SideBar />
      <Box w='100%' h='100vh' overflowY='scroll'>
        <ProductCategory {...mockListOfCategoriesWithItems[0]}></ProductCategory>
        <ProductCategory {...mockListOfCategoriesWithItems[1]}></ProductCategory>
        <ProductCategory {...mockListOfCategoriesWithItems[2]}></ProductCategory>
      </Box>
      <SideDrawer />
    </Flex>
  )
};


