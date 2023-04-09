import { Box, Flex } from '@chakra-ui/react';
import { SideBar } from '@/components/SideBar';
import { SideDrawer } from '@/components/SideDrawer';
import { SearchBar } from '@/components/SearchBar';
import { ProductCategory } from '@/components/ProductCategory';
import { mockListOfCategoriesWithItems } from '@/components/ProductCategory/__mock__/productCategoryData';

export const MainScreen = () => {
  return (
    <Flex bg="#fafafe" w="full" justifyContent="space-between">
      <SideBar />
      <Box w="100%" h="100vh" overflowY="scroll">
        <Flex justifyContent="flex-end" m="27.71px 80.5px 0px 94.32px">
          <SearchBar />
        </Flex>
        <ProductCategory {...mockListOfCategoriesWithItems[0]}></ProductCategory>
        <ProductCategory {...mockListOfCategoriesWithItems[1]}></ProductCategory>
        <ProductCategory {...mockListOfCategoriesWithItems[2]}></ProductCategory>
      </Box>
      <SideDrawer />
    </Flex>
  );
};

