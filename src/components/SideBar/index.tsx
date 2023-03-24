import { Flex } from '@chakra-ui/react';
import { NavigationItems } from '../NavigationItems';
import { ShoppingList } from '../ShoppingList';

export const SideBar = () => {
  return (
    <Flex
      bg="white"
      width="24"
      h="full"
      justify="space-between"
      alignItems="center"
      direction="column"
    >
      <NavigationItems />
      <ShoppingList />
    </Flex>
  );
};
