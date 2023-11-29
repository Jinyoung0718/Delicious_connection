import React, { useRef } from 'react';
import styled from 'styled-components';
import useOnClickOut from '../../hook/useOnClickOut';

export default function RecipeModal({ id, image, summary, title, diets, nutrition, extendedIngredients, setModalOpen }) {
  const ref = useRef();
  useOnClickOut(ref, () => {
    setModalOpen(false);
  });

  return (
    <ModalOverlay>
      <ModalContent ref={ref}>
        <FlexContainer>
          <LeftContent>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <StyledSummary dangerouslySetInnerHTML={{ __html: summary }} />
          </LeftContent>
          <RightContent><ul style={{listStyle: 'none'}}>
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
  background-color: rgba(0, 0, 0, 0.6); 
  backdrop-filter: blur(5px); 
`;


const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 60%; 
  width: 100%;
  height: 85%;
  overflow-x: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    margin: 0%;
  }

  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #367c39;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LeftContent = styled.div`
  flex: 1;
  margin-right: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
