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
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 14.6%;
`;

const AppTitle = styled.div`
  font-weight: 400;
  font-size: 35px;
  text-align: center;
  font-family: "Noto Serif KR";
  margin-bottom: 20px;
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
`;

const DataText = styled.div`
  margin-bottom: 8px;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; 
  margin-top: 20px;
  border-radius: 8px;
`;

