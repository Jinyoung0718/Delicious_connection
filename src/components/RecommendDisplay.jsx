import React, { useState } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

const IngredientInput = ({ isLoading, onSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    onSubmit(userInput);
  }

  return (
    <Container>
      <StyledTextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="Please enter the ingredients in order"
      />
      <StyledButton loading={isLoading} onClick={handleClick}>
        Let's Cook
      </StyledButton>
    </Container>
  );
};

export default IngredientInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextArea = styled(TextArea)`
  width: 90%; /* Adjust the width as needed */
  height: 10rem;
  margin-bottom: 2rem;
  border-radius: 8px;
`;

const StyledButton = styled(Button)`
  width: 150px;
  background-color: #1890ff;
  color: #fff;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #096dd9;
  }
`;