import { useAuthLogined } from '@/hooks/UseAuthLogined';
import axios, { AxiosResponse } from 'axios';
const Auth = useAuthLogined();

export const mySetting = async () => {
    const userId = Auth.userId;

    console.log('userid', userId);

    try {
        const res: AxiosResponse = await axios.get(`https://belog.diligentp.com/auth/userInfo/${userId}`);
        return res;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response;
        }
    }
};

export const myAccoutDelete = async () => {
    const userId = Auth.userId;

    try {
        const res: AxiosResponse = await axios.delete(`https://belog.diligentp.com/auth/withdraw/${userId}`);
        return res;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response;
        }
    }
};
