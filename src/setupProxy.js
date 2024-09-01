const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://13.209.93.111:8070',
            changeOrigin: true,
        })
    );
};