import { Menu, User } from "react-feather";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  width: 100%;
  padding-top: 20px;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
  margin: 0;
  font-weight: 300;
  font-size: 36px;
  line-height: 35px;
  text-align: center;
`;

const Nav = () => {
  return (
    <Header>
      <Menu />
      <Logo>gameseek</Logo>
      <User />
    </Header>
  );
};

export default Nav;
