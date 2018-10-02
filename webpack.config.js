const path = require('path')
const CleanWebpack = require('clean-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const UglifyJS = require('uglifyjs-webpack-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')

module.exports = (env) => {
  const devMode = env.mode !== 'dist'

  const plugins = [
    new MiniCssExtract({
      filename: 'css/[name].[hash].css'
    })
  ]

  const optimization = {}

  if(devMode) {
    plugins.push(
      new CleanWebpack(['dist'], { root: __dirname })
    )

    optimization.minimizer = [
      new UglifyJS(),
      new OptimizeCssAssets({})
    ]
  }

  return {
    mode: devMode ? 'development' : 'production',
    entry: {
      home: path.resolve(__dirname, 'src/entries/home.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `js/${devMode ? '[name].js' : '[name].[hash].js'}`,
      publicPath: `${path.resolve(__dirname, 'dist')}/`,
      chunkFilename: 'js/[id].[chunkhash].js'
    },
    devtool: devMode ? 'eval-source-map' : '',
    optimization,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /^node_modules$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtract.loader,
            'css-loader'
          ]
        },
        {
          test: /\.(jpg|png|gif|svg)/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              fallback: 'file-loader',
              name: `res/${devMode ? '[path][name].[ext]' : '[path][name].[hash].[ext]'}`,
            }
          }
        }
      ]
    },
    plugins
  }
}
