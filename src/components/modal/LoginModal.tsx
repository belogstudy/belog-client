'use client';

import { AiOutlineClose } from 'react-icons/ai';
import { AuthModal } from './AuthModal';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stat } from 'fs';
import { RootState } from '@/redux/store';
import { isLogined, userId } from '@/redux/features/auth.slices';
import { login } from '@/service/auth/register';
import { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useLoginModal, useSignupModal } from '@/hooks/UseAuthModal';
import { useAuthLogined } from '@/hooks/UseAuthLogined';

export const LoginModal = () => {
    const router = useRouter();

    const authLogin = useAuthLogined();

    const dispatch = useDispatch();

    const checkLogined = useSelector((state: RootState) => state.authReducer.isLogined);

    const authLoginmodal = useLoginModal();

    const authSignupmodal = useSignupModal();

    const authToggle = useCallback(() => {
        if (authLogin.isLogined == true) {
            return;
        }
        authSignupmodal.open();
        authLoginmodal.close();
    }, [checkLogined, authSignupmodal.check, authLoginmodal.check]);

    const header = (
        <button
            onClick={() => authLoginmodal.close()}
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

    const handleLogin = async () => {
        const body = { email, password };

        try {
            const res = await login(body);
            if (res?.status === 200) {
                dispatch(userId(res.data.userId));
                sessionStorage.setItem('userId', res.data.userId);

                toast.success('로그인이 완료되었습니다');
                console.log(res);
                authLoginmodal.close();
                router.push('/');
            }
        } catch (error: any) {
            toast.error(error.data.message);
        }
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const body = (
        <div className="flex flex-row items-center">
            <div className="flex flex-col w-9/12">
                <input
                    type="text"
                    placeholder="이메일을 입력하세요"
                    className="flex-grow border-2 border-velogauthgray-100 p-2 mb-2 text-black "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    className="flex-grow border-2 border-velogauthgray-100 p-2 text-black "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                onClick={handleLogin}
                className=" bg-velogauthgreen-100 text-white p-2 hover:opacity-80 transition ml-auto"
            >
                로그인
            </button>
        </div>
    );

    const footer = (
        <div className="flex justify-end items-center space-x-2">
            <p className="text-velogauthgreen-100">아직 회원이 아니신가요??</p>
            <p
                className="text-velogauthgreen-200 font-semibold hover:opacity-80 transition"
                onClick={authToggle}
            >
                회원가입{' '}
            </p>
        </div>
    );

    return (
        <>
            <Toaster />
            <AuthModal
                title="로그인"
                header={header}
                actionLabel="로그인"
                body={body}
                footer={footer}
                subtitle="이메일로 로그인"
                isOpen={authLoginmodal.check}
            />
        </>
    );
};
