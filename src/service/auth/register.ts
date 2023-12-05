import axios from 'axios';

export const register = async (body: Object) => {
    try {
        const res = await axios.post('https://belog.diligentp.com/register', body);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
