import { PlantBySlugQuery } from "__generated__/graphql";
import { isObject } from "lodash";
import Image from "next/image";
import Layout from "src/layout/Layout";
import Seo from "src/layout/Seo";

import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export interface PlantDetailsPageProps
  extends Pick<PlantBySlugQuery, "plant"> {}
const PlantDetailsPage = ({ plant }: PlantDetailsPageProps) => {
  const renderMain = () => {
    if (!isObject(plant)) return "Coming soon"; // render fallback screen

    return (
      <Grid
        templateColumns={{ lg: "2fr 1fr" }}
        templateRows={{ base: "1fr" }}
        mt="4"
      >
        <Seo title={plant.botanicalName} description={plant.shortDescription} />
        <Box maxW="40rem" gridRow={{ base: "2", lg: "revert" }}>
          <Heading>{plant.botanicalName}</Heading>
          <Text color="gray.600">{plant.shortDescription}</Text>
          <Prose>
            <Box h="30rem" mt="4" position="relative" borderRadius="2xl">
              <Image
                src="https://images.unsplash.com/photo-1524026698834-75d837ad5d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="hello"
                fill
                style={{
                  borderRadius: "16px",
                }}
              />
            </Box>
            <Box
              dangerouslySetInnerHTML={{ __html: plant.description.html }}
              mt="6"
            />
          </Prose>
        </Box>
        <Box
          borderLeft={{ base: "none", lg: "solid" }}
          borderLeftColor={{ base: "none", lg: "gray.200" }}
          borderBottom={{ base: "solid", lg: "none" }}
          borderBottomColor={{ base: "gray.200", lg: "none" }}
          px={{ base: "none", lg: "4" }}
          py={{ base: "4", lg: "none" }}
          gridRow={{ base: "1", lg: "revert" }}
        >
          <Heading as="h2" size="lg" fontWeight="500">
            Metadata
          </Heading>
          <Text fontWeight="bold" mt="4">
            Common name
          </Text>
          <Text>{plant.commonName}</Text>
          <Text fontWeight="bold" mt="4">
            Other names
          </Text>
          <Text>{plant.commonName}</Text>
          <Text fontWeight="bold" mt="4">
            Other metadata
          </Text>
          <Text>lorem ipsum</Text>
        </Box>
      </Grid>
    );
  };
  return <Layout>{renderMain()}</Layout>;
};

export default PlantDetailsPage;
