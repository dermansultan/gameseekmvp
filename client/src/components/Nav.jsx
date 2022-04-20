import { Menu, User } from "react-feather";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <Logo>gameseek</Logo>
      </Link>
      <Link to="/list" style={{ color: "white" }}>
        <User />
      </Link>
    </Header>
  );
};

export default Nav;
