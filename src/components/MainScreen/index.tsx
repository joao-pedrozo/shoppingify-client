import { Box, Flex } from '@chakra-ui/react';
import { SideBar } from '@/components/SideBar';
import { SideDrawer } from '@/components/SideDrawer';
import { ProductCategory } from '@/components/ProductCategory';

const mockListOfCategoriesWithItems = [{
    title: 'Fruit and Vegetables',
    items: ['Avocado ', 'Banana', 'Bunch of purple carrots 5pcs', 'Watermelon', 'Mandarin Nadorcott', 'Orange', 'Spinach', 'Cucumber', 'Broccoli']
  }, {
    title: 'Beverages',
    items: ['Soda ', 'Cola', 'Orange Juice', 'Beer Pilsener 6x', 'Wine']
  },
  {
    title: 'Bakery',
    items: ['Bread', 'Whole Grain Bread', 'Chocolate Cake', 'Butter Cake', 'Croissant', 'Pan au Chocolat']
}];

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


