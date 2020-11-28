const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//The HtmlWebpackPlugin used to bundle all our js and css in one html file
//it requires a source file from there it copies the content and put our assets in newly
//created index.html {template option name} 

//if we do not specify the entry file then webpack assumes to load it from './src/index.js

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html',   //this plugin uses our bundle to work on html 
            title:'Webpack Config'
        })
    ]
}