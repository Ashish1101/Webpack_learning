const path = require('path')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')

//Mode tell webpack to work in development or production and do work according to that
//style-loader injects our css style from js file
//css loader loads all the file name with .css and merge them all in single js file

const dev = {
    mode:'development',
    module: {
        rules: [
            {
               test: /\.css$/,  //regular expression to catch any file with .css extension
               use:["style-loader","css-loader"]  //work in reverse sequence first load css then add to html
               
            }
        ]
    },
    output: {
        filename:'main.js',  //add hash to make a new copy of the main bundle with diffent name
        path: path.resolve(__dirname , 'build'),  //path is the directory where we want to put our build folder
        
    } 
}

module.exports = merge([dev , commonConfig])

//merge here merged two objects in single object