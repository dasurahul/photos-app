import React, { useState } from "react";
import ThemeContext from "../store/theme-context";

import styled from "styled-components";

const Form = (props) => {
  const [input, setInput] = useState(() => {
    if (props.value) {
      return props.value;
    } else {
      return "";
    }
  });
  const [error, setError] = useState(false);
  const themeContext = React.useContext(ThemeContext);
  const darkTheme = themeContext.darkTheme;
  const inputHandler = (event) => {
    setError(false);
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (input.trim().length === 0) {
      setError(true);
      return;
    }
    props.onSubmit(input);
  };
  return (
    <Container darkTheme={darkTheme}>
      <MyForm onSubmit={submitHandler}>
        <Input
          type="text"
          className={`form-control ${error && "is-invalid"}`}
          placeholder="Search..."
          onChange={inputHandler}
          value={input}
          onBlur={() => setError(false)}
          darkTheme={darkTheme}
        />
      </MyForm>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  margin: 0 auto;
  background-color: ${(props) => (props.darkTheme ? "#111" : "white")};
  color: ${(props) => (props.darkTheme ? "white" : "#111")};
`;

const MyForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 0;
`;

const Input = styled.input`
  background-color: ${(props) => (props.darkTheme ? "#111" : "white")};
  color: ${(props) => (props.darkTheme ? "white" : "#111")};
  &:focus {
    background-color: ${(props) => (props.darkTheme ? "#111" : "white")};
    color: ${(props) => (props.darkTheme ? "white" : "#111")};
  }
`;
