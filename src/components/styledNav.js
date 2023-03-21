import styled from "styled-components";

const Nav = styled.nav`
  ul {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 0;
    padding: 0;
    transition: 1s;
    text-decoration: none;
  }

  li,
  .disabled {
    height: auto;
    transition: 0.5s;
    background-color: #333;
    margin-top: 2px;
    list-style: none;
  }

  li a,
  .disabled {
    height: auto;
    transition: 0.5s;
    color: #fff;
    text-decoration: none;
    font-size: 30px;
    padding: 5px;
  }

  li:hover {
    background-color: rgb(69, 69, 69);
    color: #fff;
    transition: all 0.3s ease-in-out;
  }

  .active {
    height: 0;
    padding: 0;
    margin: 0;
    font-size: 0;
    transition: height 0.3s ease-out;
  }
`;

export default Nav;
