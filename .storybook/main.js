const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../')
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
    });
    return config;
  },
};
