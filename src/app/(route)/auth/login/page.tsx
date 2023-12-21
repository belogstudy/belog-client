'use client';
import { RootState } from '@/redux/store';
import { isloginModalOpen, authEmail, isLogined, issignupModalOpen } from '@/redux/features/auth.slices';

import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpModal } from '@/components/modal/SignUpModal';
import { LoginModal } from '@/components/modal/LoginModal';
import { Toaster } from 'react-hot-toast';
import { useLoginModal, useSignupModal } from '@/hooks/UseAuthModal';
import { useAuthLogined } from '@/hooks/UseAuthLogined';

export default function Login() {
    const dispatch = useDispatch();

    const authLoginmodal = useLoginModal();

    const isOpenLoginModal = useSelector((state: RootState) => state.authReducer.isloginModalOpen);

    const authLogin = useAuthLogined();

    const authToggle = useCallback(() => {
        if (authLogin.isLogined == true) {
            return;
        }
        authLoginmodal.open();
    }, [authLogin.isLogined, isOpenLoginModal]);
    return (
        <div>
            <button onClick={authToggle}>로그인</button>
            <button onClick={() => sessionStorage.clear()}>로그아웃</button>
            <LoginModal />
            <SignUpModal />
        </div>
    );
}
