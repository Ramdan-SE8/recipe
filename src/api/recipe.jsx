import axios from "axios";

const BASE_URL = "https://ddc22abc-c358-44e6-b8ec-5298c98dbb7b.mock.pstmn.io";

const recipeAPI = axios.create({ baseURL: BASE_URL });

export default recipeAPI;
