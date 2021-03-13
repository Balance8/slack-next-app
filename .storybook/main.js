const path = require('path');

module.exports = {
  stories: [
    '../src/components/**/**/*.stories.mdx',
    '../src/components/**/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    return config;
  }
  //Fix for baseurl config bug between nextjs + storybook: Review later once they fix ^
};
