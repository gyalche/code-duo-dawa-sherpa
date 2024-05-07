import axios from "axios";

const API = axios.create({
    baseURL: `https://www.dnd5eapi.co`,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default API;