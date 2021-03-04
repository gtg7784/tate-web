const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withPlugins([
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]'
      },
    },
  ],
  [withTypescript]
]);