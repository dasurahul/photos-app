import React from "react";

import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <Container>
      <Logo onClick={() => history.push("/")}>Photos App</Logo>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  padding: 20px;
  font-family: "Lobster", sans-serif;
  color: #222;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const Logo = styled.h1`
  cursor: pointer;
`;
