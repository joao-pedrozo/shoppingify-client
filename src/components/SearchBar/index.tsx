import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdOutlineSearch } from 'react-icons/md';

export const SearchBar = () => {
  return (
    <Flex m="1.6rem 4rem">
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <MdOutlineSearch color="#34333A" fontSize={22} />
        </InputLeftElement>

        <Input
          border={'none'}
          placeholder="search item"
          _placeholder={{
            color: 'rgba(189, 189, 189, 1)',
            fontSize: 15,
          }}
          borderRadius="12px"
          bg={'rgba(255, 255, 255, 1)'}
          boxShadow={'sm'}
        />
      </InputGroup>
    </Flex>
  );
};
