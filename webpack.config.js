const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    // Webpack configuration goes here
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: './dist/bundle.[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
    },
};