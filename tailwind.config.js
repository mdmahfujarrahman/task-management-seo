/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#006EB6",
                secondary: "#00B5FF",
                tertiary: "#FFE700",
                quaternary: "#D21010",
                quinary: "#F2F4F7",
                graybg: "#E8EEF3",
            },
        },
    },
    plugins: [],
};
