import { Flex } from '@chakra-ui/react';
import { ProjectLogo } from '../ProjectLogo';
import { NavigationItems } from '../NavigationItems';
import { ShoppingList } from '../ShoppingList';

export const SideBar = () => {
  return (
    <Flex
      bg="white"
      width="24"
      h="full"
      py="8"
      justify="space-between"
      alignItems="center"
      direction="column"
    >
      <ProjectLogo />
      <NavigationItems />
      <ShoppingList />
    </Flex>
  );
};
