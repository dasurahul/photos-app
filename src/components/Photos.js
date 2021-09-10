import React from "react";
import Photo from "./Photo";
import ThemeContext from "../store/theme-context";

import styled from "styled-components";

const Photos = ({ items }) => {
  const themeContext = React.useContext(ThemeContext);
  const darkTheme = themeContext.darkTheme;
  return (
    <Container darkTheme={darkTheme}>
      {items.map((item) => (
        <Photo key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Photos;

const Container = styled.div`
  background-color: ${(props) => (props.darkTheme ? "#111" : "white")};
  padding: 40px 0;
`;
