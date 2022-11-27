import { ChakraTheme, extendTheme, withDefaultSize } from "@chakra-ui/react";

import styles from "./styles";

const theme = extendTheme(
  {
    styles,
  },
  withDefaultSize({ size: "lg", components: ["Heading"] }),
  withDefaultSize({ size: "md", components: ["Text"] })
) as ChakraTheme;

export default theme;
