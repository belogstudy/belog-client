'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { MySettingLayout } from '@/components/setting/mySettingLayout';

export default function mysetting() {
    const [nickEditOn, setNickEditOn] = useState(false);
    const [velogTitleEditOn, setVelogTitleEditOn] = useState(false);
    const [emailEditOn, setEmailEditOn] = useState(false);
    const [acountDeleteOn, setAccountDeleteOn] = useState(false);

    const handleNickEdit = () => {
        setNickEditOn(true);
    };

    const handleVelogTitleEdit = () => {
        setVelogTitleEditOn(true);
    };

    const handleEmailEdit = () => {
        setEmailEditOn(true);
    };

    const handleAccountDelete = () => {
        setAccountDeleteOn(true);
    };

    const nickEdit =
        nickEditOn == false ? (
            <div>
                <p className="font-semibold text-2xl mb-2">닉네임</p>
                <p className="text-base mb-2 text-velogauthgray-300">소개말</p>
                <button
                    onClick={handleNickEdit}
                    className="text-base text-velogauthgreen-100 underline hover:opacity-80"
                >
                    수정
                </button>
            </div>
        ) : (
            <div className="flex flex-col">
                <input
                    className="placeholder-black py-1 px-2 font-semibold text-2xl text-black mb-2 border-velogauthgray-400 border-2 rounded"
                    placeholder="닉네임"
                />
                <input
                    className="placeholder-black py-1 px-2 text-xl text-black mb-2 border-velogauthgray-400 border-2 rounded"
                    placeholder="소개말"
                />
                <button className="rounded mt-2 ml-auto text-base px-4 py-1 text-white bg-velogauthgreen-100 hover:opacity-80">
                    저장
                </button>
            </div>
        );

    const velogTitleEdit =
        velogTitleEditOn == false ? (
            <>
                <p className="text-base">벨로그 제목내용</p>
                <button
                    onClick={handleVelogTitleEdit}
                    className="ml-auto text-velogauthgreen-100 underline hover:opacity-80"
                >
                    수정
                </button>
            </>
        ) : (
            <>
                <input className="placeholder-black px-2 text-lg text-black border-velogauthgray-400 border-2 rounded" />
                <button className="bg-velogauthgreen-100 px-2 ml-auto hover:opacity-80 rounded text-white">저장</button>
            </>
        );

    const emailEdit =
        emailEditOn == false ? (
            <>
                <p className="text-base">이메일</p>
                <button
                    onClick={handleEmailEdit}
                    className="ml-auto text-velogauthgreen-100 underline hover:opacity-80"
                >
                    변경
                </button>
            </>
        ) : (
            <>
                <input className="placeholder-black px-2 text-lg text-black border-velogauthgray-400 border-2 rounded" />
                <button className="bg-velogauthgreen-100 px-2 ml-auto hover:opacity-80 rounded text-white">저장</button>
            </>
        );

    const acountDelete = (
        <>
            <p className="font-semibold text-base mr-5">회원 탈퇴</p>
            <button className="ml-4 px-4 py-0.5 text-base bg-red-400 rounded text-l text-white hover:opacity-80">
                회원 탈퇴
            </button>
        </>
    );

    return (
        <>
            <MySettingLayout
                emailEdit={emailEdit}
                nickEdit={nickEdit}
                velogTitleEdit={velogTitleEdit}
                acountDelete={acountDelete}
            />
        </>
    );
}
