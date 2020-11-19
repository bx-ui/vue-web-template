module.exports = {
    // baseUrl: "/",
    devServer: {
        proxy: {
             '/api': {
                target: 'http://localhost:8088',
                // changeOrigin: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        },
    }
}