import { ComponentStyleConfig } from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
  variants: {
    heading1: {
      fontWeight: "bold",
      fontSize: "3xl",
    },
    heading3: {
      fontWeight: "bold",
      fontSize: "xl",
    },
    logo: {
      color: "white",
      fontWeight: "bold",
      fontSize: "4xl",
    },
    caption: {
      fontWeight: "thin",
      fontSize: "md",
    },
  },
};

export default Text;
