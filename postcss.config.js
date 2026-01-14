export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {
      // 兼容更多浏览器
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'Chrome >= 60',
        'Firefox >= 60',
        'Safari >= 12',
        'iOS >= 12',
        'Android >= 5'
      ]
    },
  },
}