const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      createProxyMiddleware('/v1/search/book.json', {
         target: 'https://openapi.naver.com',
         changeOrigin: true,
      }),
   );
   app.use(
      createProxyMiddleware('/api', {
         target: 'http://localhost:3000/',
         changeOrigin: true,
      }),
   );
};
