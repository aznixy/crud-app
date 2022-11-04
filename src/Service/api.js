import axios from 'axios';

const phonesUrl = 'http://localhost:3002/phones';


export const getPhones = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${phonesUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling getPhones api ', error);
    }
}

export const addPhone = async (phone) => {
    return await axios.post(`${phonesUrl}`, phone);
}

export const deletePhone = async (id) => {
    return await axios.delete(`${phonesUrl}/${id}`);
}

export const editPhone = async (id, phone) => {
    return await axios.put(`${phonesUrl}/${id}`, phone)
}