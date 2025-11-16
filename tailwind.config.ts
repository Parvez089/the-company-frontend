/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mahfuz: ["var(--font-mahfuz)"],
        shadhinata: ["var(--font-shadhinata)"],
        shohid: ["var(--font-shohid-shafkat)"],
        siliguri: ["var(--font-hind-siliguri)"],
      },
    },
  },
  plugins: [],
};

export default config;
