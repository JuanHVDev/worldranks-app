import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#d2d5da",
                secundary: "#6c727f",
                accent: "#4e80ee",
                background: "#1b1d1f",
                backgroundSecundary: "#282b30",
            },
            backgroundImage: {
                "hero-pattern": "url('/hero-image-wr.jpg')",
            },
        },
    },
    plugins: [],
};
export default config;
