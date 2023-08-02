const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      createProxyMiddleware('/api', {
         target: 'https://openapi.naver.com',
         changeOrigin: true,
         pathRewrite: {
            '^/api/': '/',
         },
      }),
   );
   app.use(
      createProxyMiddleware('/api', {
         target: 'http://localhost:3000/',
         changeOrigin: true,
         pathRewrite: {
            '^/api/': '/',
         },
      }),
   );
};
