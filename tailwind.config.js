import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                'xxs': '0.525rem',
                'xs': '0.75rem', // 12px
                'sm': '0.875rem', // 14px
                'base': '1rem', // 16px
                'lg': '1.125rem', // 18px
                'xl': '1.25rem', // 20px
                '2xl': '1.5rem', // 24px
                '3xl': '1.875rem', // 30px
                '4xl': '2.25rem', // 36px
                '5xl': '3rem', // 48px
                '6xl': '3.75rem', // 60px
                '7xl': '4.5rem', // 72px
                '8xl': '6rem', // 96px
                '9xl': '8rem', // 128px
            },
        },
    },

    plugins: [forms],
};
