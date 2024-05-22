/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark_text: '#e8fee1',
                dark_background: '#040e01',
                dark_primary: '#84f96c',
                dark_secondary: '#057a42',
                dark_accent: '#1344f6',
                light_text: '#081e01',
                light_background: '#f4fef1',
                light_primary: '#1e9306',
                light_secondary: '#85fac1',
                light_accent: '#093aec',
            },
            fontFamily: {
                urbanist: "'Urbanist', sans-serif",
            },
        },
    },
    plugins: [],
};
