module.exports = {
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/howtomakeanoffer/'
      : '/',
  css: {
    loaderOptions: {
      sass: {
        // global sass variables
        // @/ is an alias to src/
        data: `@import "@/styles/vars.scss";`,
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use("i18n")
        .loader("@kazupon/vue-i18n-loader")
        .end();
  }
}
