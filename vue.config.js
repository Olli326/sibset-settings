const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath:'/sibset-settings/',
  transpileDependencies: true,
  css: { extract: true },
});
