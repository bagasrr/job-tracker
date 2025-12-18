/** @type {import('tailwindcss').Config} */
export default {
    // INI KUNCINYA: Mengubah dari system default ke manual class
    darkMode: 'class',

    // INI PENTING: Kasih tau Tailwind di mana file codingan lu
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx', // Karena lu pake React/Inertia
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
