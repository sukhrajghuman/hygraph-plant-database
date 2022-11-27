import { gql } from "@apollo/client";

export const PLANT_FAMILY_LIST = gql`
  query PlantFamilyList {
    plantFamilies {
      slug
      name
    }
  }
`;

export const PLANT_LIST_BY_FAMILY_SLUG = gql`
  query PlantListByFamilySlug($plantFamilySlug: String!) {
    plants(where: { plantFamily: { slug: $plantFamilySlug } }) {
      commonName
      botanicalName
      slug
      shortDescription
    }
  }
`;

export const PLANT_LIST = gql`
  query PlantList {
    plants {
      commonName
      botanicalName
      slug
      shortDescription
      description {
        html
        markdown
      }
      plantFamily {
        slug
      }
    }
  }
`;

export const PLANT_BY_SLUG = gql`
  query PlantBySlug($slug: String!) {
    plant(where: { slug: $slug }) {
      commonName
      botanicalName
      shortDescription
      description {
        html
        markdown
      }
    }
  }
`;
