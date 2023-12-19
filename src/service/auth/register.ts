import axios, { AxiosResponse } from 'axios';

export const register = async (body: Object) => {
    try {
        const res: AxiosResponse = await axios.post('https://belog.diligentp.com/auth/register', body);
        return res;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response;
        }
    }
};

export const login = async (body: Object) => {
    try {
        const res: AxiosResponse = await axios.post('https://belog.diligentp.com/auth/login', body);
        return res;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response;
        }
    }
};
