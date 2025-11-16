import autoprefixer from "autoprefixer";

/** @type {import('postcss').ProcessOptions} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;
