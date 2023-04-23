/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                cyan: {
                    ...colors.cyan,
                    900: "#57D6E7",
                },
                pink: {
                    ...colors.pink,
                    900: "#FF67A4",
                },
            },
        },
    },
    plugins: [],
};

