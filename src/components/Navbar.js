import React from "react";

import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <h1>Photos App</h1>
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
