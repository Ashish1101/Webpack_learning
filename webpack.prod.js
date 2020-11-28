const path = require('path')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//The MiniCssExtractPlugin extract the css from js file
//and make seprate file when MiniCssExtractPlugin.loader use

//if we do not specify the output folder than it will create all file in dist folder

module.exports = merge(commonConfig , {
    mode:'production',
    output: {
        filename:'main.[contenthash].js',  //add hash to make a new copy of the main bundle with diffent name
        path: path.resolve(__dirname , 'build'),
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            filename:"[name].[contenthash].css"
        }),
        
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
         {
                    test: /\.css$/,  //regular expression to catch any file with .css extension
                    use:[MiniCssExtractPlugin.loader,"css-loader"]  //minLoader extracting the css form js
                    
         } 
        ]
    }

})