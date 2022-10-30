import { chakra, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WiserHeader: React.FC = () => {
  return (
    <chakra.header bg="cyan.800">
      <HStack alignItems="center" h="inherit" px={10} py={6}>
        <Text variant="logo" cursor="pointer">
          <Link to="/">WiserNews.</Link>
        </Text>
      </HStack>
    </chakra.header>
  );
};

export default WiserHeader;
