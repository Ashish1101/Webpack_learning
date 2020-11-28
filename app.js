const addtion = require('./src/Components/addtion')
const division = require('./src/Components/division')

function run(){
    let a = 10
    let b = 0;

    if(b === 0) {
       return addtion(a, b)
    } else {
        division(a , b)
    }
}

console.log(run());
console.log('hwllo world')