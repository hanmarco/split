const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/split/' : '/',
  pwa: {
    name: 'Split',
    workboxOptions: {
      navigateFallback: '/split/index.html',
    },
    manifestOptions: {
      start_url: '/split/',
      scope: '/split/',
      display: 'standalone',
      background_color: '#ffffff'
    },
  },
  transpileDependencies: true,
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})