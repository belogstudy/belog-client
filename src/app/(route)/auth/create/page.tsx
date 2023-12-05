'use client';
import { authEmail } from '@/redux/features/auth.slices';
import { RootState } from '@/redux/store';
import { register } from '@/service/auth/register';
import { useRouter } from 'next/navigation';
import { Root } from 'postcss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Create() {
    const router = useRouter();

    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => state.authReducer.email);

    const [pActive, setPActive] = useState('');

    const handleFocus = (field: string) => {
        setPActive(field);
    };

    const SignUp = () => {
        const body = { profileName: name, email, profile: intro, password };
        const res = register(body);
        console.log(res);
        console.log(body);
    };

    const [name, setName] = useState('');
    const [intro, setIntro] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen text-2xl">
            <div className="flex flex-col mb-10 items-start ">
                <p className="text-black font-semibold text-6xl mb-4">환영합니다!</p>
                <p className="text-black text-2xl">기본 회원 정보를 등록해주세요.</p>
                <div className="bg-white flex flex-col items-start mt-12 mb-10">
                    <p className={`text-xl mb-2 ${pActive === 'name' ? 'text-velogauthgreen-100' : ''}`}>이름</p>
                    <input
                        onFocus={() => handleFocus('name')}
                        className="text-2xl text-velogauthgray-300 mb-6 focus:outline-none border-b border-grey-300 focus:border-velogauthgreen-100 focus:text-velogauthgreen-100" // 입력란의 텍스트 사이즈를 키웁니다
                        placeholder="닉네임을 입력하세요"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p className={`text-xl mb-2 ${pActive === 'password' ? 'text-velogauthgreen-100' : ''}`}>
                        비밀번호
                    </p>
                    <input
                        onFocus={() => handleFocus('password')}
                        className="text-2xl text-velogauthgray-300 mb-6 focus:outline-none border-b border-grey-300 focus:border-velogauthgreen-100 focus:text-velogauthgreen-100" // 입력란의 텍스트 사이즈를 키웁니다
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className={`text-xl mb-2 ${pActive === 'email' ? 'text-velogauthgreen-100' : ''}`}>이메일</p>
                    <input
                        onFocus={() => handleFocus('email')}
                        className="text-2xl text-velogauthgray-300 mb-6 focus:outline-none border-b border-grey-300 focus:border-velogauthgreen-100 focus:text-velogauthgreen-100" // 입력란의 텍스트 사이즈를 키웁니다
                        placeholder="이메일을 입력하세요"
                        value={email}
                        onChange={(e) => dispatch(authEmail(e.target.value))}
                    />
                    <p className={`text-xl mb-2 ${pActive === 'intro' ? 'text-velogauthgreen-100' : ''}`}>한 줄 소개</p>
                    <input
                        onFocus={() => handleFocus('intro')}
                        className="text-2xl text-velogauthgray-300 mb-6 focus:outline-none border-b border-grey-300 focus:border-velogauthgreen-100 focus:text-velogauthgreen-100" // 입력란의 텍스트 사이즈를 키웁니다
                        placeholder="당신을 한 줄로 소개해보세요"
                        value={intro}
                        onChange={(e) => setIntro(e.target.value)}
                    />
                    <div className="flex flex-row mt-6">
                        <button
                            className="bg-velogauthgray-400 p-2 rounded-2xl mr-6 text-xl hover:opacity-70 transition"
                            onClick={() => alert('닫기')}
                        >
                            취소
                        </button>
                        <button
                            className="bg-velogauthgreen-100 text-white p-2 rounded-3xl text-2xl hover:opacity-70 transition"
                            onClick={SignUp}
                        >
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
