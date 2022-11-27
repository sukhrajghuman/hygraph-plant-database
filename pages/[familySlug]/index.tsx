import {
  PlantFamilyListQuery,
  PlantListByFamilySlugQuery,
  PlantListByFamilySlugQueryVariables,
} from "__generated__/graphql";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import PlantFamilyDetails from "@modules/plant/pages/PlantFamilyDetailsPage";
import {
  PLANT_FAMILY_LIST,
  PLANT_LIST_BY_FAMILY_SLUG,
} from "@modules/plant/schema";
import { graphqlClient } from "@services/PlantService";

export type PlantFamilyDetailsData = Pick<
  PlantListByFamilySlugQuery,
  "plants" | "plantFamily"
>;

const Home: NextPage<PlantListByFamilySlugQuery> = ({
  plants,
  plantFamily,
}) => {
  return <PlantFamilyDetails plants={plants} plantFamily={plantFamily} />;
};

export default Home;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await graphqlClient.request<PlantFamilyListQuery>(
    PLANT_FAMILY_LIST
  );

  const paths = data.plantFamilies.map(({ slug }) => ({
    params: { familySlug: slug },
  }));

  return {
    paths,
    fallback: "blocking", // new pages are generated serverside
  };
};

interface FamilyParams extends ParsedUrlQuery {
  familySlug: string;
}
export const getStaticProps: GetStaticProps<
  PlantListByFamilySlugQuery
> = async ({ params }) => {
  const { familySlug } = (params as FamilyParams) ?? {};

  try {
    const data = await graphqlClient.request<
      PlantListByFamilySlugQuery,
      PlantListByFamilySlugQueryVariables
    >(PLANT_LIST_BY_FAMILY_SLUG, {
      plantFamilySlug: familySlug,
    });

    return {
      props: data,
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};
