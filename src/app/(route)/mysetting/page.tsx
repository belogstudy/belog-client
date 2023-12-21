'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { MySettingLayout } from '@/components/setting/MySettingLayout';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { useAuthLogined } from '@/hooks/UseAuthLogined';
import axios from 'axios';
import { myAccoutDelete, mySetting } from '@/service/myvelog/myvelog';
import toast, { Toaster } from 'react-hot-toast';
import { useLoginModal } from '@/hooks/UseAuthModal';
import { LoginModal } from '@/components/modal/LoginModal';
import { useRouter } from 'next/navigation';
import { isLogined } from '@/redux/features/auth.slices';

export default function mysetting() {
    const [nickEditOn, setNickEditOn] = useState(false);
    const [velogTitleEditOn, setVelogTitleEditOn] = useState(false);
    const [emailEditOn, setEmailEditOn] = useState(false);
    const [accountDeleteOn, setAccountDeleteOn] = useState(false);
    const [socialEditOn, setSocialEditOn] = useState(false);

    const [myInfo, setMyInfo] = useState<mysettingInterface>();

    const authLogin = useAuthLogined();
    const AuthLoginModal = useLoginModal();
    const router = useRouter();

    console.log('uuid', authLogin.userId);
    console.log('isLogind', authLogin.isLogined);

    useEffect(() => {
        const handleMyInfo = async () => {
            try {
                const res = await mySetting();
                console.log(res);

                if (res?.status === 200) {
                    setMyInfo(res.data);
                } else {
                    toast.error('내 정보를 불러오는데 실패했습니다.');
                    router.push('/');
                }
            } catch (error) {
                console.log(error);
                toast.error('내 정보를 불러오는데 실패했습니다.');
            }
        };
        handleMyInfo();
    }, []);

    console.log('myInfo', myInfo);

    const handleAccountDelete = () => {
        try {
            myAccoutDelete();
            toast.success('회원탈퇴에 성공했습니다.');
            authLogin.logout();
            setAccountDeleteOn(false);
            router.push('/');
        } catch (error) {
            console.log(error);
            toast.error('회원탈퇴에 실패했습니다.');
        }
    };

    const handleNickEdit = () => {
        setNickEditOn(true);
    };

    const handleVelogTitleEdit = () => {
        setVelogTitleEditOn(true);
    };

    const handleEmailEdit = () => {
        setEmailEditOn(true);
    };

    const handleAccountDeleteModalOn = () => {
        setAccountDeleteOn(true);
    };

    const handlesetSocialEdit = () => {
        setSocialEditOn(true);
    };

    const deleteOnModal = accountDeleteOn && (
        <>
            <div className="fixed inset-0 bg-white bg-opacity-70 z-10" />
            <div className="fixed inset-0 flex items-center justify-center z-20">
                <div className="bg-white flex flex-col items-start justify-center shadow-lg sm:w-1/4 md:w-[400px] lg:w-[400px] p-6">
                    <p className="text-black text-2xl font-bold">회원 탈퇴</p>
                    <p className="text-black font-light mt-4 mb-4">정말로 탈퇴 하시겠습니까?</p>
                    <div className="ml-auto">
                        <button
                            onClick={() => setAccountDeleteOn(false)}
                            className="bg-white text-velogauthgreen-100 text-base px-5  p-2 mr-2 hover:opacity-80"
                        >
                            취소
                        </button>
                        <button
                            onClick={handleAccountDelete}
                            className="bg-velogauthgreen-100 rounded text-base px-5 text-white p-1 hover:opacity-80"
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

    const nickEdit =
        nickEditOn == false ? (
            <div>
                <p className="font-semibold text-2xl mb-2 text-black">
                    {myInfo && myInfo.profileName.length > 0 ? myInfo.profileName : '닉네임'}
                </p>
                <p className="text-base mb-2 text-velogauthgray-300">
                    {myInfo && myInfo.profile.length > 0 ? myInfo.profile : '소개말'}
                </p>
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
                    className=" placeholder-black w-[520px] py-1 px-2 font-medium text-xl text-black mb-2 border-velogauthgray-400 border rounded"
                    placeholder="닉네임"
                />
                <input
                    className="placeholder-black font-extralight px-2 text-lg text-black mb-2 border-velogauthgray-400 border rounded"
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
                <p className="text-light text-black">
                    {' '}
                    {myInfo && myInfo.profile.length > 0 ? myInfo.profileName + '.log' : '벨로그 제목'}
                </p>
                <button
                    onClick={handleVelogTitleEdit}
                    className="ml-auto text-velogauthgreen-100 underline hover:opacity-80"
                >
                    수정
                </button>
            </>
        ) : (
            <>
                <input className="placeholder-black w-9/12 px-2 text-lg text-black border-velogauthgray-400 border rounded" />
                <button className="bg-velogauthgreen-100 px-2 ml-auto hover:opacity-80 rounded text-white">저장</button>
            </>
        );

    const emailEdit =
        emailEditOn == false ? (
            <>
                <p className="text-light text-black"> {myInfo && myInfo.email.length > 0 ? myInfo.email : '이메일'}</p>
                <button
                    onClick={handleEmailEdit}
                    className="ml-auto text-velogauthgreen-100 underline hover:opacity-80"
                >
                    변경
                </button>
            </>
        ) : (
            <>
                <input className="placeholder-black w-9/12 px-2 text-lg text-black border-velogauthgray-400 border rounded" />
                <button className="bg-velogauthgreen-100 px-2 ml-auto hover:opacity-80 rounded text-white">저장</button>
            </>
        );

    const acountDelete = (
        <>
            <p className="font-semibold text-base mr-5 text-black">회원 탈퇴</p>
            <button
                onClick={handleAccountDeleteModalOn}
                className="ml-4 px-4 py-0.5 text-base bg-red-400 rounded text-l text-white hover:opacity-80"
            >
                회원 탈퇴
            </button>
        </>
    );

    const socialEdit =
        socialEditOn == false ? (
            <>
                <button
                    onClick={handlesetSocialEdit}
                    className="ml-3 text-velogauthgreen-100 underline hover:opacity-80"
                >
                    정보 추가
                </button>
            </>
        ) : (
            <>
                <div className="flex flex-row ml-2">
                    <MdEmail
                        className="mt-1 ml-3"
                        size={18}
                    />
                    <input
                        placeholder="이메일을 입력하세요"
                        className="w-[420px] ml-2 mb-2 px-2 py-1 text-lg text-black border-velogauthgray-400 border rounded"
                    />
                </div>

                <div className="flex flex-row ml-2">
                    <FaGithub
                        className="mt-1 ml-3"
                        size={18}
                    />

                    <input
                        placeholder="Github 계정을 입력하세요"
                        className="w-9/12 ml-2 mb-2 px-2 py-1 text-lg text-black border-velogauthgray-400 border rounded"
                    />
                </div>

                <div className="flex flex-row ml-2">
                    <FaTwitter
                        className="mt-1 ml-3"
                        size={18}
                    />
                    <input
                        placeholder="Twitter 계정을 입력하세요"
                        className="w-9/12 ml-2 mb-2 px-2 py-1 text-lg text-black border-velogauthgray-400 border rounded"
                    />
                </div>

                <div className="flex flex-row ml-2">
                    <FaFacebookSquare
                        className="mt-1 ml-3"
                        size={18}
                    />

                    <input
                        placeholder="https://www.facebook.com/ 계정을 입력하세요"
                        className="w-[420px]  ml-2 mb-2 px-2 py-1 text-lg text-black border-velogauthgray-400 border rounded"
                    />
                </div>

                <div className="flex flex-row ml-2">
                    <MdHome
                        className="mt-1 ml-3"
                        size={18}
                    />
                    <input
                        placeholder="홈페이지 주소를 입력하세요"
                        className="w-[420px] ml-2 mb-2 px-2 py-1 text-lg text-black border-velogauthgray-400 border rounded"
                    />
                </div>
                <div className="flex justify-end">
                    <button className="bg-velogauthgreen-100 mt-2 ml-2 px-4 py-1 hover:opacity-80 rounded text-white">
                        저장
                    </button>
                </div>
            </>
        );

    if (authLogin.isLogined === false) {
        toast.error('로그인이 필요합니다.');
    }

    return (
        <>
            <Toaster />
            <LoginModal />

            {deleteOnModal}
            <MySettingLayout
                emailEdit={emailEdit}
                nickEdit={nickEdit}
                velogTitleEdit={velogTitleEdit}
                acountDelete={acountDelete}
                socialEdit={socialEdit}
            />
        </>
    );
}
