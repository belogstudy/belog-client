import { isloginModalOpen, issignupModalOpen } from '@/redux/features/auth.slices';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const useLoginModal = () => {
    const dispatch = useDispatch();

    const open = () => {
        dispatch(isloginModalOpen(true));
    };

    const close = () => {
        dispatch(isloginModalOpen(false));
    };

    const check = useSelector((state: RootState) => state.authReducer.isloginModalOpen);

    return { open, close, check };
};

export const useSignupModal = () => {
    const dispatch = useDispatch();

    const open = () => {
        dispatch(issignupModalOpen(true));
    };

    const close = () => {
        dispatch(issignupModalOpen(false));
    };

    const check = useSelector((state: RootState) => state.authReducer.issignupModalOpen);

    return { open, close, check };
};
