import React, { useState, useEffect } from 'react';
import spoonacularApi from '../api/spoonacularApi';
import styled from 'styled-components';
import "./GlutenFreeRow.css";

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function GlutenFreeRow() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await spoonacularApi.get('/recipes/random?number=12&tags=gluten_free');
    const data = request.data.recipes;
    setRecipes(data);
  };

  return (
    <section id='Ranking_Row'>
      <h3 id='title'>GlutenFree diet</h3>
      <hr style={{ width: '300px' }} />
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation= {false}
      loop={true}
      spaceBetween={50}
      slidesPerView={4}
    >
      {recipes.map((recipe) => (
        <SwiperSlide key={recipe.id} className="row__posters">
          <Container>
            <div className="image-container">
              <img src={recipe.image} alt={recipe.title} />
              <p className="overlay-text">{recipe.title}</p>
            </div>
            <Gradient />
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  );
}

export default GlutenFreeRow;

const Container = styled.div`

  border-radius: 2rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 110%;
    object-fit: cover;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
