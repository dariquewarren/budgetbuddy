const path = require("path");
const MINIExtractTextPlugin = require('mini-css-extract-plugin')


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
  plugins: [
    new MINIExtractTextPlugin({
      filename: 'styles.css'
     })
  ],
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      
      
    }, 
  {
    test: /\.s?css$/ ,
    use: [MINIExtractTextPlugin.loader, 'css-loader', 'sass-loader']
  }]
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    historyApiFallback: true 
  }
}};
