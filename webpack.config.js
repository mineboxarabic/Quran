const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require("webpack");
const CleanwebpackPlugin = require("clean-webpack-plugin")

module.exports = 
{
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js',
      clean: true
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],

    module: 
    {
        rules:
        [
            {
                test: /\.html$/,
                use:
                [
                    "html-loader"
                ]
            },
                    
            {
                test: /\.css$/,
                use:
                ["style-loader","css-loader"]

            }
        ]

        
    }

};