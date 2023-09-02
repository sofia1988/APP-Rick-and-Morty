import { API_RM } from "../constants/Api.constants";

class RickAndMortyService {

    async getAllCharacters(params) {
        const response = await fetch(params);
        return response.json();

    }
    async getAllCharactersById(id) {
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        return response.json();
    }
    async getAllEpisode(params) {
        const response = await fetch(params);
        return response.json();
    }

    async getAllEpisodeById(id) {
        const response = await fetch(API_RM.EPISODE_BY_ID(id));
        return response.json();
    }



}
export default new RickAndMortyService();