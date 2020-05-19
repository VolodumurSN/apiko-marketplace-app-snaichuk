const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'https://marketplace-api-sv.herokuapp.com/',
  pathRewrite: {
    '^/api': '',
  },
  changeOrigin: true,
});

module.exports = (app) => {
  app.use('/api', proxy);
};
