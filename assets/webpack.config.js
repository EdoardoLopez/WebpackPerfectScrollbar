const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: './js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery",
      "jquery": "jquery",
      'PerfectScrollbar': 'perfect-scrollbar'
    }),
  ]
};