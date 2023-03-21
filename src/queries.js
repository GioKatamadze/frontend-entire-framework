import { gql } from "@apollo/client";

export const GET_MENU_ITEMS = gql`
  query {
    menuItems {
      id
      title
      url
      active
      submenu {
        id
        title
        url
      }
    }
  }
`;
