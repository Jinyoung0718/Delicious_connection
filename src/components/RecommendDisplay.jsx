import React, { useState } from 'react';
import { Input, Button } from 'antd';
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
    <div>
      <TextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="Please enter the ingredients in order"
      />
      <Button loading={isLoading} onClick={handleClick}>Let's Cook</Button>
    </div>
  );
};

export default IngredientInput;
