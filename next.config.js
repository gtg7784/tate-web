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
      webpack: config => {
        config.module.rules.forEach(rule => {
          if (rule.test.toString().includes('.scss')) {
            rule.rules = rule.use.map(useRule => {
              if (typeof useRule === 'string') {
                return { loader: useRule };
              }
              if (useRule.loader === 'css-loader') {
                return {
                  oneOf: [
                    {
                      test: new RegExp('.global.scss$'),
                      loader: useRule.loader,
                      options: {},
                    },
                    {
                      loader: useRule.loader,
                      options: { modules: true }
                    },
                  ],
                };
              }
              return useRule;
            });
            delete rule.use;
          }
        });
        return config;
      },
    },
  ],
  [withTypescript]
]);