import { Stack, Skeleton } from "@chakra-ui/react";
import React from "react";

const Loader: React.FC = () => {
  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default Loader;
