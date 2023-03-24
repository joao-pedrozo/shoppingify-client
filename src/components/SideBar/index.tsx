import { Flex } from '@chakra-ui/react';
import { ProjectLogo } from '@/components/ProjectLogo';

export const SideBar = () => {
  return (
    <Flex
      bg="white"
      width="24"
      h="full"
      justify="center"
      alignItems="space-between"
      py="10"
    >
      <ProjectLogo />
    </Flex>
  );
};
