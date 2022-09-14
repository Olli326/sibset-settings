const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath:'/sibset/',
  transpileDependencies: true,
  css: { extract: true },
});
