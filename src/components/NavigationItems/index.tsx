import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { NavigationItem } from '../NavigationItem';
import { FaHistory, FaListUl, FaPoll } from 'react-icons/fa';

export const NavigationItems = () => {
  const [active, setActive] = useState<string>('Items');

  const isActive = (id: string) => {
    setActive(id);
  };

  return (
    <Flex w="full" direction="column">
      <NavigationItem active={active} onClick={isActive} id={'Items'}>
        <FaListUl />
      </NavigationItem>
      <NavigationItem active={active} onClick={isActive} id={'History'}>
        <FaHistory />
      </NavigationItem>
      <NavigationItem active={active} onClick={isActive} id={'Statistics'}>
        <FaPoll />
      </NavigationItem>
    </Flex>
  );
};
