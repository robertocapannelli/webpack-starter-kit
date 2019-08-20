const path = require('path');

const StyleLintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devtool: 'inline-source-map',
    devServer: { //TODO This is not working properly
        contentBase:'.', //This tells webpack-dev-server to serve the files from the . directory, where the index is on localhost:8080
        compress: true,
        hotOnly: true,
        port: 8080
    },
    output: {
        filename: 'scripts/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          bypassOnDebug: true, // webpack@1.x
                          disable: true, // webpack@2.x and newer
                          mozjpeg: {
                            progressive: true,
                            quality: 65
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                            enabled: false,
                          },
                          pngquant: {
                            quality: '65-90',
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          },
                          // the webp option will enable WEBP
                          webp: {
                            quality: 75
                          }
                        },
                      },
                      {
                        loader: 'url-loader',
                        options: {
                          limit: 8192,
                        },
                      },
                ]
            }
        ]
    },
    plugins: [
        //TODO This is not working properly
        // new StyleLintPlugin({
        //     failOnError: false,
        //     syntax: 'scss'
        // })
        new CleanWebpackPlugin(),
        new ManifestPlugin(),
    ]
};