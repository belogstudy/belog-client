'use client';

import { AiOutlineClose } from 'react-icons/ai';
import { AuthModal } from './AuthModal';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stat } from 'fs';
import { RootState } from '@/redux/store';
import { isloginModalOpen, authEmail, isLogined, issignupModalOpen } from '@/redux/features/auth.slices';

export const SignUpModal = () => {
    const router = useRouter();

    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => state.authReducer.email);

    const checkLogined = useSelector((state: RootState) => state.authReducer.isLogined);

    const isOpenLoginModal = useSelector((state: RootState) => state.authReducer.isloginModalOpen);

    const isOpenRegisterModal = useSelector((state: RootState) => state.authReducer.issignupModalOpen);

    const authToggle = useCallback(() => {
        if (checkLogined == true) {
            return;
        }
        dispatch(issignupModalOpen(false));
        dispatch(isloginModalOpen(true));
    }, [checkLogined, isOpenRegisterModal, isOpenLoginModal]);

    const header = (
        <button
            onClick={() => dispatch(issignupModalOpen(false))}
            className="
p-1
ml-auto
border-0
text-black
hover:opacity-70
transition"
        >
            <AiOutlineClose size={20} />
        </button>
    );

    const body = (
        <div className="flex flex-row items-center">
            <input
                type="text"
                placeholder="이메일을 입력하세요"
                className="flex-grow border-2 border-velogauthgray-100 p-2 "
                value={email}
                onChange={(e) => dispatch(authEmail(e.target.value))}
            />
            <button
                onClick={() => router.push(`/auth/create`)}
                className="bg-velogauthgreen-100 text-white p-2"
            >
                회원가입
            </button>
        </div>
    );

    const footer = (
        <div className="flex justify-end items-center space-x-2">
            <p className="text-velogauthgreen-100">계정이 이미 있으신가요?</p>
            <p
                className="text-velogauthgreen-200 font-semibold hover:opacity-80 transition"
                onClick={authToggle}
            >
                로그인{' '}
            </p>
        </div>
    );

    return (
        <>
            <AuthModal
                title="회원가입"
                header={header}
                actionLabel="회원 가입"
                body={body}
                footer={footer}
                subtitle="이메일로 회원가입"
                isOpen={isOpenRegisterModal}
            />
        </>
    );
};
