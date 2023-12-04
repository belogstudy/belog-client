import { AiOutlineClose } from 'react-icons/ai';
import { AuthModal } from './AuthModal';

export const SignUpModal = () => {
    const footer = (
        <div className="flex justify-end items-center space-x-2">
            <p className="text-velogauthgreen-100">계정이 이미 있으신가요?</p>
            <p className="text-velogauthgreen-200 font-semibold">로그인 </p>
        </div>
    );

    const header = (
        <button
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
        <div className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="이메일을 입력하세요"
                className="border-4 border-velogauthgray-100 p-2 rounded-lg"
            />
            <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="border-4 border-velogauthgray-100 p-2 rounded-lg"
            />
            <input
                type="text"
                placeholder="닉네임을 입력하세요"
                className="border-4 border-velogauthgray-100 p-2 rounded-lg"
            />
        </div>
    );

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center transition-all duration-300 ease-in-out bg-white p-5 rounded-xl shadow-md">
                <AuthModal
                    title="회원 가입"
                    header={header}
                    actionLabel="회원 가입"
                    body={body}
                    footer={footer}
                    subtitle="이메일로 회원가입"
                />
            </div>
        </>
    );
};
