import { gql } from "@apollo/client";

export const GET_MENU_ITEMS = gql`
  query {
    menuItems {
      data {
        attributes {
          title
          url
        }
      }
    }
  }
`;
