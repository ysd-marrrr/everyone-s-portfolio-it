const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../')
    config.module.rules.push({
      test: /\.(s*)css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            sourceMap: true,
            plugins: [
              require('postcss-import'),
              require('tailwindcss'),
              require('autoprefixer'),
              new VueLoaderPlugin()
            ],
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    })
    return config
  },
}
