import { Flex } from '@chakra-ui/react';
import { NavigationItems } from '../NavigationItems';

export const SideBar = () => {
  return (
    <Flex bg="white" width="24" h="full" alignItems={'center'}>
      <NavigationItems />
    </Flex>
  );
};
