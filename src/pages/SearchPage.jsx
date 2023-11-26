import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // useNavigate와 Navigate import 제거
import spoonacularApi from '../api/spoonacularApi';
import RecipeModal from '../components/modals/RecipeModal';
import './SearchPage.css';

export default function SearchPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
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
  }, [searchTerm]);

  const handleClick = (recipe) => {
    setModalOpen(true);
    setRecipeSelected(recipe); 
    console.log("recipe", recipe);
  };

  return (
    <div className='recipe-container'>
      {searchResults.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
          <img src={recipe.image} alt="" className="recipe-image" onClick={() => handleClick(recipe)} />
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
