import React, { useState } from "react";

import styled from "styled-components";

const Form = (props) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
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
    <Container>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className={`form-control ${error && "is-invalid"}`}
          placeholder="Search..."
          onChange={inputHandler}
          value={input}
          onBlur={() => setError(false)}
        />
      </form>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 40px;
`;
