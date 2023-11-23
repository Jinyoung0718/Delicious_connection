import axios from 'axios';

// Spoonacular API의 기본 URL
const BASE_URL = 'https://api.spoonacular.com';

// Axios 인스턴스 생성
const spoonacularApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
  },
});

export default spoonacularApi;