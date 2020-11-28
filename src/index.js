const addtion = require('./Components/addtion')
const substraction = require('./Components/substraction')
const division = require('./Components/division')
const multiplication = require('./Components/multiplication')
require('./main.css')

module.exports = {
    addtion,
    substraction,
    multiplication,
    division
}

console.log("hello world")

//this is the entry file for webpack 
//webpack allways check what changes occurd here 
//and do the things according them

//we have to include all our css and javascript file here
//if do not include any file here then webpack will not identify it 
//and did'nt include that code in our main file that it produced after build
//so always include your file here at the end