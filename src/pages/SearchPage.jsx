import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDebounce } from '../hook/useDebounce';
import spoonacularApi from '../api/spoonacularApi';
import RecipeModal from '../components/modals/RecipeModal';
import './SearchPage.css';

export default function SearchPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    console.log(useLocation());
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("query");
  const fetchSearchRecipe = async (searchTerm) => {
    try {
      const response = await spoonacularApi.get(
        `/recipes/complexSearch?query=${searchTerm}&number=16&addRecipeInformation=true&addRecipeNutrition=true&includeIngredients`
      );
      console.log(response);
      const recipes = response.data.results; 
      setSearchResults(recipes);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearchRecipe(searchTerm);
    }
  }, [searchTerm]); // 글자를 칠 때마다 검색결과가 달라지니 딜레이가 심함 -> 디바운스 구현


  const handleClick = (recipe) => {
    setModalOpen(true);
    setRecipeSelected(recipe); 
    console.log("recipe", recipe);
  };
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchRecipe(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className='recipe-container'>
      {searchResults.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
          <img src={recipe.image}  alt={`${recipe.title} 이미지`} className="recipe-image" onClick={() => handleClick(recipe)} />
          <hr style={{ width: '240px' }} />
          <h4 className="recipe-title">{recipe.title}</h4>
        </div>
      ))}
      {modalOpen && (
        <RecipeModal {...recipeSelected} setModalOpen={setModalOpen} />
      )}
    </div>
  );
}
