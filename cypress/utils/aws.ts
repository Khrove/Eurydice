require('dotenv').config();
const axios = require('axios');

export async function getUser(userId: string, searchVal: string) {
    try {
        const response = await axios.get(`${process.env.AWS__URL}/default/getUser?user_id=${userId}&search=${searchVal}`);
        const data = JSON.parse(response.data.body);
        console.log(data);
        return data;
    } catch(e) {
        console.error(e);
    }
}