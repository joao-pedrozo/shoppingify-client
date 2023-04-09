import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdOutlineSearch } from 'react-icons/md';

export const SearchBar = () => {
  return (
    <Flex>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <MdOutlineSearch color="#34333A" fontSize={22} />
        </InputLeftElement>

        <Input
          border={'none'}
          placeholder="search item"
          _placeholder={{
            color: '#BDBDBD',
            fontSize: 14,
          }}
          borderRadius="12px"
          bg={'#FFFFFF'}
          boxShadow={'sm'}
        />
      </InputGroup>
    </Flex>
  );
};
