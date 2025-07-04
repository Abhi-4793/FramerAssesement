const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: [
        "./app/**/*.{js,ts,jsx,tsx}", // App Router
        "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            orchid: "rgb(163, 92, 162)", // custom color
          },
        },
      },
      plugins: [],
    },
  },
};

export default config;
