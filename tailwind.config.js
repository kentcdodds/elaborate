// tailwind.config.js
module.exports = {
  experimental: {
    darkModeVariant: true,
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'dark'],
    boxShadow: ['responsive', 'hover', 'focus', 'dark'],
  },
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
