import axios from "axios"
import { URL } from "./database";

const getProducts = async () => {
    const res = await axios.get(`${URL}/products`)
    return res.data
}

const newProduct = async (data) => {
    const res = await axios.put(`${URL}/products`, data)
    return res.data
}

export {
    getProducts,
    newProduct
}