import { PlantListByFamilySlugQuery } from "__generated__/graphql";
import DefaultContainer from "src/layout/DefaultContainer";

import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

interface PlantBannerProps
  extends Pick<PlantListByFamilySlugQuery, "plantFamily"> {}

const PlantBanner = ({ plantFamily }: PlantBannerProps) => {
  return (
    <Box>
      <Flex
        w="full"
        backgroundImage="url(https://images.unsplash.com/photo-1524026698834-75d837ad5d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <Box
          w="full"
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient="linear(to-r, blackAlpha.700, blackAlpha.200)"
        >
          <DefaultContainer py="8">
            <Heading color="white">{plantFamily?.name}</Heading>
            <Text
              color="white"
              fontWeight={500}
              lineHeight={1.2}
              fontSize="2xl"
              mt="2"
              maxW="32rem"
            >
              {plantFamily?.description}
            </Text>
          </DefaultContainer>
        </Box>
      </Flex>
    </Box>
  );
};

export default PlantBanner;
