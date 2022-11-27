import { Container, ContainerProps } from "@chakra-ui/react";

const DefaultContainer = ({ children, ...props }: ContainerProps) => {
  return (
    <Container maxW="container.xl" {...props}>
      {children}
    </Container>
  );
};

export default DefaultContainer;
