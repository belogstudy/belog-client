'use client';
import { useState } from 'react';

export default function Create() {
    const [pActive, setPActive] = useState('');

    const handleFocus = (field: string) => {
        setPActive(field);
    };

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
                    />
                    <p className={`text-xl mb-2 ${pActive === 'email' ? 'text-velogauthgreen-100' : ''}`}>이메일</p>
                    <input
                        onFocus={() => handleFocus('email')}
                        className="text-2xl text-velogauthgray-300 mb-6 focus:outline-none border-b border-grey-300 focus:border-velogauthgreen-100 focus:text-velogauthgreen-100" // 입력란의 텍스트 사이즈를 키웁니다
                        placeholder="이메일을 입력하세요"
                    />
                    <p className={`text-xl mb-2 ${pActive === 'intro' ? 'text-velogauthgreen-100' : ''}`}>한 줄 소개</p>
                    <input
                        onFocus={() => handleFocus('intro')}
                        className="text-2xl text-velogauthgray-300 mb-6 focus:outline-none border-b border-grey-300 focus:border-velogauthgreen-100 focus:text-velogauthgreen-100" // 입력란의 텍스트 사이즈를 키웁니다
                        placeholder="당신을 한 줄로 소개해보세요"
                    />
                </div>
            </div>
            <div>footer 버튼 라인</div>
        </div>
    );
}
