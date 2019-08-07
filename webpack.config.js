const path = require('path');

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        filename: 'scripts/main.js',
        path: path.resolve(__dirname, 'dist')
    }
};