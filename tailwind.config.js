// tailwind.config.js
module.exports = {
  purge: {
    mode: 'layers',
    content: [
      './app/**/*.js',
      './app/**/*.ts',
      './app/**/*.tsx',
      './app/**/*.mdx',
      './app/**/*.md',
      './remix.config.js',
    ],
  },
  plugins: [require('@tailwindcss/typography')],
}
