import { ChakraTheme, extendTheme, withDefaultSize } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

import styles from "./styles";

const theme = extendTheme(
  {
    styles,
  },
  withDefaultSize({ size: "xl", components: ["Heading"] }),
  withDefaultSize({ size: "lg", components: ["Text"] }),
  withProse()
) as ChakraTheme;

export default theme;
