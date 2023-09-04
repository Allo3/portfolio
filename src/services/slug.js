import axios from "axios"

const API_URL = process.env.REACT_APP_STRAPI_URL;
export async function fetchProjectBySlug(slug) {
    try {
        return await axios.get(`${API_URL}/projects?populate\\[media\\]=media&populate\\[screenMedia\\]=screenMedia&populate\\[tags\\]\\[populate\\]\\[logo\\]=tags&filters\\[slug\\]\\[$eq\\]=${slug}`)
    } catch (e) {
        throw new Error(`Erreur lors de la récupération du projet ${slug} : ${e.message}`);
    }
}