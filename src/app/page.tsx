import { SignUpModal } from '@/components/modal/SignUpModal';
import Image from 'next/image';
import AuthLayout from './(route)/auth/layout';
import { Component } from 'react';
import { AppProps } from 'next/app';
import { LoginModal } from '@/components/modal/LoginModal';
import { Toaster } from 'react-hot-toast';

export default function Home() {
    return (
        <>
            <LoginModal />
            <SignUpModal />
        </>
    );
}
