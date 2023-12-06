'use client';
import { RootState } from '@/redux/store';
import { isloginModalOpen, authEmail, isLogined, issignupModalOpen } from '@/redux/features/auth.slices';

import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpModal } from '@/components/modal/SignUpModal';
import { LoginModal } from '@/components/modal/LoginModal';
import { Toaster } from 'react-hot-toast';

export default function Login() {
    const dispatch = useDispatch();

    const checkLogined = useSelector((state: RootState) => state.authReducer.isLogined);

    const isOpenLoginModal = useSelector((state: RootState) => state.authReducer.isloginModalOpen);

    const isOpenRegisterModal = useSelector((state: RootState) => state.authReducer.issignupModalOpen);

    console.log(checkLogined);

    const authToggle = useCallback(() => {
        if (checkLogined == true) {
            return;
        }
        dispatch(isloginModalOpen(true));
    }, [checkLogined, isOpenLoginModal]);
    return (
        <div>
            <button onClick={authToggle}>로그인</button>
            <button onClick={() => dispatch(isLogined(false))}>로그아웃</button>
            <LoginModal />
            <SignUpModal />
        </div>
    );
}
