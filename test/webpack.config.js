var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './stats/with-non-asset-chunk'),
    filename: 'bundle.js'
  },
  stats: {
    assets: true,
    excludeAssets: [
      /a-clone/
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './src/a-clone.js')
    }])
  ]
};
