import Link from "next/link";
import { PropsWithChildren } from "react";

import { Text, TextProps } from "@chakra-ui/react";

export interface NextLinkProps extends TextProps {
  href: string;
}

const NextLink = ({
  children,
  href,
  ...props
}: PropsWithChildren<NextLinkProps>) => {
  return (
    <Link href={href} passHref>
      <Text
        as="span"
        color="green"
        textDecoration="underline"
        fontSize="lg"
        _hover={{ textDecoration: "none" }}
        {...props}
      >
        {children}
      </Text>
    </Link>
  );
};

export default NextLink;
