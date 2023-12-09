import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                velogauthgreen: {
                    100: '#12b886',
                    200: '#20c997',
                },
                velogauthgray: {
                    100: '#f8f9fa',
                    200: '#495057',
                    300: '#868e96',
                    400: '#ced4da',
                },

                backgroundImage: {
                    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                },
            },
        },
        plugins: [],
    },
};

export default config;
