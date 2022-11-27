import React, { FC, ReactNode } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "./";

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
