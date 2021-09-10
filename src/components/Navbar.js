import React from "react";
import { useHistory } from "react-router-dom";
import ThemeContext from "../store/theme-context";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import styled from "styled-components";

const Navbar = () => {
  const history = useHistory();
  const themeContext = React.useContext(ThemeContext);
  const darkTheme = themeContext.darkTheme;
  const changeTheme = themeContext.changeTheme;

  return (
    <Container darkTheme={darkTheme}>
      <Logo onClick={() => history.push("/")}>Photos App</Logo>
      <div style={{ cursor: "pointer" }}>
        {!darkTheme && (
          <Brightness4Icon fontSize="large" onClick={changeTheme} />
        )}
        {darkTheme && (
          <Brightness7Icon fontSize="large" onClick={changeTheme} />
        )}
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  padding: 20px;
  font-family: "Lobster", sans-serif;
  color: #222;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.darkTheme ? "#333" : "#fafafa")};
  color: ${(props) => (props.darkTheme ? "white" : "#111")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  cursor: pointer;
`;
