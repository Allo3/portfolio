import axios from "axios";
const API_URL = process.env.REACT_APP_STRAPI_URL;
export async function fetchProjects() {
    try {
        return await axios.get(`${API_URL}/projects?populate[media][data]=media&populate[tags][populate][logo][data]=tags`);
    } catch (error) {
        throw new Error("Erreur lors de la récupération des projets :", error);
    }
}