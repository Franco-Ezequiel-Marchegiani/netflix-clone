import axios from "axios";
/* Base URL para hacer pedidos(requests) a la base de datos de películas */
/* Base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});



export default instance;