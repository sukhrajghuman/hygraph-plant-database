import { PropsWithChildren } from "react";

import DefaultContainer from "./DefaultContainer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <DefaultContainer as="main">{children}</DefaultContainer>
    </>
  );
};

export default Layout;
