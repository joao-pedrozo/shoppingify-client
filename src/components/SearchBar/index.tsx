import { MdSearch } from 'react-icons/md';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
export const SearchBar = () => {
  return (
    <Flex>
      <InputGroup mt="5">
        <InputLeftElement
          mx={'5px'}
          children={<MdSearch color="black" size={20} />}
        />
        <Input
          placeholder="search item"
          _placeholder={{
            'font-size': '13px',
            'padding-left': '15px',
          }}
          bgColor={'#FFF'}
          htmlSize={20}
          width="auto"
        />
      </InputGroup>
    </Flex>
  );
};
