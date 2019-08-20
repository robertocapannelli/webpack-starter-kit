const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watchOptions: {
        poll: 1000 // Check for changes every second
    },
    devServer: { //TODO This is not working properly the page does not refresh after modifying an html file, it should watch those too
        contentBase:'.', //This tells webpack-dev-server to serve the files from the . directory, where the index is on localhost:8080
        compress: true,
        hot: false,
        port: 8080
    },
});