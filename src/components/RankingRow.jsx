import React, { useState, useEffect } from 'react';
import spoonacularApi from '../api/spoonacularApi';
import RecipeModal from './modals/RecipeModal';
import styled from 'styled-components';
import './RankingRow.css';

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function RankingRow() {
  const [rankingRecipes, setRankingRecipes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await spoonacularApi.get('/recipes/random?number=12');
    const data = request.data.recipes;
    console.log("data", data); // == recipes
    setRankingRecipes(data);
  };

  const handleClick = (recipe) => {
    setIsModalOpen(true);
    setSelectedRecipe(recipe); 
    console.log("recipe", recipe)
  };

  return (
    <section id='Ranking_Row'>
      <h3 id='title'>Ranking Diet</h3>
      <hr style={{ width: '300px' }} />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{}}
        loop={true}
        spaceBetween={50}
        slidesPerView={5} 
      >
        {rankingRecipes.map((recipe) => (
          <SwiperSlide key={recipe.id} className="row__posters">
            <Container>
              <div className="image-container">
                <img src={recipe.image} alt={recipe.title}  onClick={() => handleClick(recipe)} />
                <p className="overlay-text">{recipe.title}</p>
              </div>
              <Gradient />
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
      {isModalOpen && ( 
        <RecipeModal {...selectedRecipe} setIsModalOpen={setIsModalOpen} /> 
      )}
    </section>
  );
}

export default RankingRow;

const Container = styled.div`
  border-radius: 2rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 80%;
    object-position: center; 
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
