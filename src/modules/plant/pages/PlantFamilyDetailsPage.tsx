import { PlantListByFamilySlugQuery } from "__generated__/graphql";
import { isObject, join } from "lodash";
import { useRouter } from "next/router";
import DefaultContainer from "src/layout/DefaultContainer";
import Layout from "src/layout/Layout";

import { Heading, List, ListItem } from "@chakra-ui/react";
import NextLink from "@components/NextLink";

import PlantBanner from "../components/PlantBanner";

export type PlantFamilyDetailsPageProps = Pick<
  PlantListByFamilySlugQuery,
  "plants" | "plantFamily"
>;

const PlantFamilyDetailsPage = ({
  plants,
  plantFamily,
}: PlantFamilyDetailsPageProps) => {
  const { asPath } = useRouter();

  const renderMain = () => {
    if (!isObject(plantFamily)) return <Heading>Coming soon</Heading>;
    return (
      <>
        <PlantBanner plantFamily={plantFamily} />
        <DefaultContainer py="8">
          <Heading as="h2">Associated species </Heading>

          <List mt="4">
            {plants.map(({ slug, botanicalName }, i) => (
              <ListItem key={i}>
                <NextLink href={join([asPath, slug], "/")}>
                  {botanicalName}
                </NextLink>
              </ListItem>
            ))}
          </List>
        </DefaultContainer>
      </>
    );
  };
  return <Layout fullWidth>{renderMain()}</Layout>;
};

export default PlantFamilyDetailsPage;
