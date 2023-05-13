const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = withNextra()
