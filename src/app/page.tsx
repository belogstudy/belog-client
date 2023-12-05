import { SignUpModal } from '@/components/modal/SignUpModal';
import Image from 'next/image';
import AuthLayout from './(route)/auth/layout';
import { Component } from 'react';
import { AppProps } from 'next/app';

export default function Home() {
    return (
        <>
            <SignUpModal />;
        </>
    );
}
