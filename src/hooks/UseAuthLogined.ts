import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export const useAuthLogined = () => {
    const userId = sessionStorage.getItem('userId') || '';

    const logout = () => sessionStorage.clear();

    const isLogined = userId.length > 0 ? true : false;

    return { userId, isLogined, logout };
};
