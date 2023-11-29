import React, { useState } from 'react';
import { CallGPT } from '../api/CallGPT';
import IngredientInput from '../components/RecommendDisplay';
import styled from 'styled-components';

export default function RecommendPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickAPiCall = async (userInput) => {
    try {
      setIsLoading(true);
      const messages = await CallGPT({
        prompt: `${userInput}`,
      });
      setData(JSON.parse(messages));
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("data", data);

  const handleSubmit = (userInput) => {
    handleClickAPiCall(userInput);
  };

  return (
    <AppContainer>
      <AppTitle>
        <h1>Combine the ingredients to create a recipe!</h1>
      </AppTitle>
      <IngredientInput isLoading={isLoading} onSubmit={handleSubmit} />
      {data && (
        <DataContainer>
          <DataTitle>{data.title}</DataTitle>
          <DataText>Ingredients: {data.ingredients && data.ingredients.join(", ")}</DataText>
          <DataText>Instructions: {data.instructions}</DataText>
          <DataText>Tips: {data.tips}</DataText>
          {data.image && <RecipeImage src={data.image} alt="Recipe Thumbnail" />}
        </DataContainer>
      )}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 40%;
  margin: auto;
  margin-top: 20vh; 
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const AppTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  font-family: "Noto Serif KR";
  margin-bottom: 20px;
  color: #333;
`;

const DataContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
`;

const DataTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #555;
`;

const DataText = styled.div`
  margin-bottom: 8px;
  color: #777;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; 
  margin-top: 20px;
  border-radius: 8px;
`;