/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    // Tailwind v4 uses the official postcss plugin
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

