import { PlantFamilyListQuery } from "__generated__/graphql";
import Layout from "src/layout/layout";

import { Heading, Text } from "@chakra-ui/react";

interface PlantListPageProps
  extends Pick<PlantFamilyListQuery, "plantFamilies"> {}
const PlantListPage = ({ plantFamilies }: PlantListPageProps) => {
  return (
    <Layout>
      <Heading>Plant list page</Heading>
      {plantFamilies.map(({ name }, i) => (
        <Text key={i}>{name}</Text>
      ))}
    </Layout>
  );
};

export default PlantListPage;
