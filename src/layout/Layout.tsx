import { PropsWithChildren } from "react";

import DefaultContainer from "./DefaultContainer";
import Header from "./Header";

const Layout = ({
  fullWidth = false,
  children,
}: PropsWithChildren<{ fullWidth?: boolean }>) => {
  return (
    <>
      <Header />
      {fullWidth ? (
        children
      ) : (
        <DefaultContainer as="main" py="8">
          {children}
        </DefaultContainer>
      )}
    </>
  );
};

export default Layout;
