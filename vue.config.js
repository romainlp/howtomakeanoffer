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
}
