const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../')
    config.module.rules.push({
      test: /\.(s*)css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            sourceMap: true,
            plugins: [
              require('postcss-import'),
              require('tailwindcss'),
              require('autoprefixer')
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    })
    return config
  }
}
