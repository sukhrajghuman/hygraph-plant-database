import { PlantFamilyListQuery } from "__generated__/graphql";
import Layout from "src/layout/Layout";
import Seo from "src/layout/Seo";

import { Heading, List, ListItem } from "@chakra-ui/react";
import NextLink from "@components/NextLink";

interface PlantListPageProps
  extends Pick<PlantFamilyListQuery, "plantFamilies"> {}

const PlantListPage = ({ plantFamilies }: PlantListPageProps) => {
  return (
    <Layout>
      <Seo title="Plant database" description="lorem ipsum" />
      <Heading>Plant list page</Heading>

      <List mt="4">
        {plantFamilies.map(({ name, slug }, i) => (
          <ListItem key={i}>
            <NextLink href={slug}>{name}</NextLink>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default PlantListPage;
