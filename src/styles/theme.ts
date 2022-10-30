import { extendTheme } from "@chakra-ui/react";
import Text from "./components/Text";
import Link from "./components/Link";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "ghostwhite",
        fontFamily: "Roboto, sans-serif",
      },
    },
  },
  components: {
    Text,
    Link,
  },
});

export default theme;
