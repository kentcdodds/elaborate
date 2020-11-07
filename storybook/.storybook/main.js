const webpack = require('webpack')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  // TODO: make this work
  // webpackFinal: async config => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   config.plugins.unshift(
  //     new webpack.NormalModuleReplacementPlugin(
  //       /\/@remix-run\/react/,
  //       resource => require.resolve('./@remix-run/react.mock.js'),
  //     ),
  //   )

  //   console.log(config)

  //   // Return the altered config
  //   return config
  // },
}
