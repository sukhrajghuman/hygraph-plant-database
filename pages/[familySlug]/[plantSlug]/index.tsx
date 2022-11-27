import {
  PlantBySlugQuery,
  PlantBySlugQueryVariables,
  PlantListQuery,
} from "__generated__/graphql";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import PlantDetailsPage from "@modules/plant/pages/PlantDetailsPage";
import { PLANT_BY_SLUG, PLANT_LIST } from "@modules/plant/schema";
import { graphqlClient } from "@services/PlantService";

const Home: NextPage<PlantBySlugQuery> = ({ plant }) => {
  return <PlantDetailsPage plant={plant} />;
};

export default Home;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await graphqlClient.request<PlantListQuery>(PLANT_LIST);

  const paths = data.plants.map(({ slug, plantFamily }) => ({
    params: { familySlug: plantFamily?.slug, plantSlug: slug },
  }));

  return {
    paths,
    fallback: "blocking", // new pages are generated serverside
  };
};

interface FamilyParams extends ParsedUrlQuery {
  plantSlug: string;
}
export const getStaticProps: GetStaticProps<PlantBySlugQuery> = async ({
  params,
}) => {
  const { plantSlug } = (params as FamilyParams) ?? {};

  try {
    const data = await graphqlClient.request<
      PlantBySlugQuery,
      PlantBySlugQueryVariables
    >(PLANT_BY_SLUG, {
      slug: plantSlug,
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
