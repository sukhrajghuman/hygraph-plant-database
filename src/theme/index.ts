import { ChakraTheme, extendTheme, withDefaultSize } from "@chakra-ui/react";

import styles from "./styles";

const theme = extendTheme(
  {
    styles,
  },
  withDefaultSize({ size: "xl", components: ["Heading"] }),
  withDefaultSize({ size: "lg", components: ["Text"] })
) as ChakraTheme;

export default theme;
