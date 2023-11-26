import React from 'react';
import styled from 'styled-components';

export default function RecipeModal({ id, image, summary, title, diets, nutrition, extendedIngredients, setModalOpen }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <FlexContainer>
          <LeftContent>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <StyledSummary dangerouslySetInnerHTML={{ __html: summary }} />
          </LeftContent>
          <RightContent>
          <ul style={{listStyle: 'none'}}>
              {(extendedIngredients || nutrition.ingredients) &&
                ((extendedIngredients || nutrition.ingredients).map((ingredient, id) => (
                  <li key={id} style={{padding:'2%', fontSize:'1.2rem', fontWeight: '300'}}>{ingredient.name}</li>
                )))}
            </ul>
          </RightContent>
        </FlexContainer>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  border-radius: 8px;
  background-color: rgb(0 0 0 / 71%);
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
  
`;

const ModalContent = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 10px;
  max-width: 60%; 
  width: 100%;
  height: 85%;
  overflow-x: hidden;
  display: flex;
  justify-content: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    margin: 0%;
  }

  button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const FlexContainer = styled.div`
  display: flex;
`;

const LeftContent = styled.div`
  flex: 1;

  img {
    object-fit: cover;
    border-radius: 10px;
  }
`;

const RightContent = styled.div`
  flex: 1;
`;

const StyledSummary = styled.div`
  background-color:  #E2E2E2;
  padding: 2%;
  margin: 2%;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
`;
