import axios from 'axios'
import { URL } from './database'

const getUsers = async () => {
    const res = await axios.get(`${URL}/users`)
    return res.data
}

const getUser = async (id) => {
    const res = await axios.get(`${URL}/users/${id}`)
    return res.data
}

const postUser = async ({ name, firstname, email, password }) => {
    const data = {
        name: name,
        firstname: firstname,
        email: email,
        password: password
    }
    const res = await axios.post(`${URL}/users`, data)
    return res.data
}

const signinUser = async ({ email, password }) => {
    const data = {
        email: email,
        password: password
    }

    const res = await axios.post(`${URL}/users/signin`, data)
    return res.data
}

const getUserProducts = async (id) => {
    const res = await axios.get(`${URL}/users/${id}/products`);
    return res.data;
}

const updateUser = async (id, user) => {
    const res = await axios({
        method: 'patch',
        url: `${URL}/users/${id}`,
        data: user
    })
    return res.data
}

export {
    getUsers, 
    getUser, 
    postUser, 
    signinUser,
    getUserProducts,
    updateUser
}