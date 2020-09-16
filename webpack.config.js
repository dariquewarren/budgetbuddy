const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env)=>{
const isProduction = env === 'production'


  console.log('env', env)
  return{
mode: 'development',
  entry: path.join(__dirname, "/src/app.js"),
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css'
  })],
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      
      
    }, 
  {
    test: /\.s?css$/ ,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: true,
        },
      },
      'css-loader',
      'sass-loader'
    ]
  }]
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    historyApiFallback: true 
  }
}};
