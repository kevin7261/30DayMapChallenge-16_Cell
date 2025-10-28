const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/30DayMapChallenge-16_Cell/',
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: 'localhost',
  },
});
