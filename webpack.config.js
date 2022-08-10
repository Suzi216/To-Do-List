const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'main.js',
},
 plugins: [
   new HtmlWebpackPlugin({
     title: 'Output Management',
     template: './src/index.html',
   }),
 ],
 module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
},
// devServer: {
//   static: './dist',
// },
// optimization: {
//    runtimeChunk: 'single',
//  },
};
