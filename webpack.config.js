const path = require("path");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack')

module.exports = (env)=>{
const isProduction = env === 'production'


  console.log('env', env)
  return{
  entry: path.join(__dirname, "/src/app.js"),
  output: {
    path: path.join(__dirname, "/public", "/dist"),
    filename: "bundle.js",
  },
  
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css'
  }) ],
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      
      
    }, 
  {
    test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, modules: true,
                      importLoaders: 1, sourceMap: true } },
                    { loader: 'postcss-loader', options: {
                      sourceMap: true,
                      postcssOptions: {
                        plugins:['postcss-preset-env']
                      }
                    } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                  ],
  },

  {
    test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'dist',

        }
      }
    ]
  }]
  },optimization: {
    minimize: false,
    minimizer: [new TerserJSPlugin({
      sourceMap: true,
    }), new OptimizeCSSAssetsPlugin({})],
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    historyApiFallback: true,
    publicPath: '/dist/'
  }
}};
