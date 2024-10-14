import axios from "axios";

const BASE_URL = "https://670b7d63ac6860a6c2cc2ef0.mockapi.io/recipe";

const recipeAPI = axios.create({ baseURL: BASE_URL });

export default recipeAPI;
