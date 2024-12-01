import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      bgGray:'rgb(34, 34, 34)',
      Gray500:'rgb(107, 114, 128)',
      blue: '#000080',
      logoWhite: 'rgb(254, 254, 254)',
      text: 'rgb(219, 219, 219)',
      fireOrange: 'rgb(192, 114, 53)',
      disabledOrange: '#ffc89c',
      deeperFireOrange: 'rgb(139, 63, 1)',
      black: 'rgb(0, 0, 0)',
      cardRed: '#f35c7a',
    }
  },
  plugins: [],
};
export default config;
