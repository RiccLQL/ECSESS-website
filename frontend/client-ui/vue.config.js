module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"); @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"); @import "@/styles/_fonts.scss";'
      }
    }
  },
  devServer: {
    proxy: {
        '^/api': {
            target: process.env.VUE_APP_API_URL,
            ws: true,
            changeOrigin: true,
            secure: false,
            pathRewrite: {'^/api': '/api'}
        }
    },
    stats: 'errors-only',
    progress: false,
}
};