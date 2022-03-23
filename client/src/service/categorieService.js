import axios from "axios";
import { URL } from "./database";

const getCategories= async () => {
    const res = await axios.get(`${URL}/categories`)
    return res.data
}

const getCategorieById= async (id) => {
    const res = await axios.get(`${URL}/categories/${id}`)
    return res.data
}

export {
    getCategories,
    getCategorieById
}