import { Flex, Text } from '@chakra-ui/react';

export const MainContent = () => (
  <Flex
    bg="#f1f1f1"
    w="full"
    marginLeft="80px"
    marginTop="37px"
    alignItems="start"
  >
    <Text width="450px" fontSize="26px">
      <span style={{ color: '#F9A109' }}>Shoppingify</span> Allows you take your
      shopping list wherever you go
    </Text>
  </Flex>
);
