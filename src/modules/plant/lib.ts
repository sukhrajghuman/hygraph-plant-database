import { PlantFamilyListQuery } from "__generated__/graphql";

import { useQuery } from "@apollo/client";

import { PLANT_FAMILY_LIST } from "./schema";

export const usePlantFamilyList = () => {
  return useQuery<PlantFamilyListQuery>(PLANT_FAMILY_LIST);
};
