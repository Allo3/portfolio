import axios from "axios";

const API_URL = process.env.REACT_APP_STRAPI_URL;

export async function createContact(contact) {
    try {
        await axios.post(`${API_URL}/api/contacts`, contact)
    } catch (e) {
        throw new Error(`Erreur lors de la récupération du projet : ${e.message}`);
    }
}