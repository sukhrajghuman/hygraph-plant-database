import { PlantFamilyListQuery } from "__generated__/graphql";
import { GetStaticProps, NextPage } from "next";

import PlantListPage from "@modules/plant/pages/PlantListPage";
import { PLANT_FAMILY_LIST } from "@modules/plant/schema";
import { graphqlClient } from "@services/PlantService";

const Home: NextPage<PlantFamilyListQuery> = ({ plantFamilies }) => {
  return <PlantListPage plantFamilies={plantFamilies} />;
};

export default Home;

export const getStaticProps: GetStaticProps<
  PlantFamilyListQuery
> = async () => {
  try {
    const data = await graphqlClient.request<PlantFamilyListQuery>(
      PLANT_FAMILY_LIST
    );

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
