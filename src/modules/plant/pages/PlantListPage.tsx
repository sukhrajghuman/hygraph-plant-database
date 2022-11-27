import { PlantFamilyListQuery } from "__generated__/graphql";

import { Heading, Text } from "@chakra-ui/react";

interface PlantListPageProps
  extends Pick<PlantFamilyListQuery, "plantFamilies"> {}
const PlantListPage = ({ plantFamilies }: PlantListPageProps) => {
  return (
    <>
      <Heading>Plant list page</Heading>
      {plantFamilies.map(({ name }, i) => (
        <Text key={i}>{name}</Text>
      ))}
    </>
  );
};

export default PlantListPage;
