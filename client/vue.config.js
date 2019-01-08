module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/index.scss";',
      },
    },
  },
};
