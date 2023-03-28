import { Box, Flex } from '@chakra-ui/react';
import { SideBar } from '@/components/SideBar';
import { SideDrawer } from '@/components/SideDrawer';
import { ProductCategory } from '@/components/ProductCategory';

export const MainScreen = () => {
  const listOfCategoriesWithItems = [{
    title: 'Fruit and Vegetables',
    items: ['Avocado ', 'Banana', 'Bunch of purple carrots 5pcs', 'Watermelon', 'Mandarin Nadorcott', 'Orange', 'Spinach', 'Cucumber', 'Broccoli']
  }, {
    title: 'Beverages',
    items: ['Soda ', 'Cola', 'Orange Juice', 'Beer Pilsener 6x', 'Wine']
  },
  {
    title: 'Bakery',
    items: ['Bread', 'Whole Grain Bread', 'Chocolate Cake', 'Butter Cake', 'Croissant', 'Pan au Chocolat']
  }
  ];

  return (
    <Flex bg="#fafafe" w="full" justifyContent="space-between" >
      <SideBar />
      <Box w='100%'>
        <ProductCategory {...listOfCategoriesWithItems[0]}></ProductCategory>
        <ProductCategory {...listOfCategoriesWithItems[1]}></ProductCategory>
        <ProductCategory {...listOfCategoriesWithItems[2]}></ProductCategory>
      </Box>
      <SideDrawer />
    </Flex>
  )
};


