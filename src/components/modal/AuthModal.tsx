import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Welcome from '../../../public/images/auth/welcome.svg';
import Image from 'next/image';

interface AuthModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    onSubmit?: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    header?: React.ReactElement;
    subtitle?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    subtitle,
    body,
    footer,
    actionLabel,
    disabled,
    header,
}) => {
    return (
        <>
            <div
                className="justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-70"
            >
                <div className="relative w-full lg:w-4/6 my-6 mx-auto lg:max-w-2xl h-full lg:h-3/6 flex rounded-lg shadow-lg ">
                    {/* 좌측 웰컴 */}
                    <div className="flex flex-col items-center justify-center p-10 bg-velogauthgray-100">
                        <Image
                            width={168}
                            height={108}
                            src={Welcome}
                            alt="Welcome to Velog"
                        />
                        <h2 className="text-2xl font-semibold text-velogauthgray-200 mt-4">환영합니다</h2>
                    </div>

                    {/* 우측 폼 */}
                    <div className="border-0 my-6 mx-6 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {header}
                        <div className="flex flex-col justify-between p-10 rounded-t">
                            <h3 className="text-xl mb-4 font-semibold text-black">{title}</h3>
                            <h2 className="text-l text-velogauthgray-300 mb-2">{subtitle}</h2>
                        </div>
                        <div className="relative p-5 flex-auto">{body}</div>
                        <div className="items-end justify-end flex flex-col gap-2 p-10">{footer}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
