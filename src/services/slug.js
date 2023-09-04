import axios from "axios"

const API_URL = process.env.REACT_APP_STRAPI_URL;
export async function fetchProjectBySlug(slug) {
    try {
        return await axios.get(`${API_URL}/projects?populate[media][data]=media&populate[screenMedia][data]=screenMedia&populate[tags][populate][logo][data]=tags&filters[slug][$eq]=${slug}`)
    } catch (e) {
        throw new Error(`Erreur lors de la récupération du projet ${slug} : ${e.message}`);
    }
}