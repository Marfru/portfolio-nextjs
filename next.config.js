const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        return config;
    },
    distDir: 'build',
    target: 'serverless',
    env: {
      CONTENTFUL_SPACE_ID: '@contentful_space_id',
      CONTENTFUL_ACCESS_TOKEN: '@contentful_access_token'
    },
    trailingSlash: true,
}));