const fs = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let array = fs.readFileSync(`${argv['_'][0]}`).toString().split("\n");
let rex = /\S/;
for(i in array) {
    array[i] = array[i].split(" ").filter(rex.test.bind(rex))
}
array.pop()
let round = 0
let pc = 0
let user = 0
for (i in array) {
    round +=1
    for (j in array[i]) {
        if (array[i][j] === 'игрок'){
            user +=1
        }
        else if (array[i][j] === 'компьютер') {
            pc += 1
        }
    }
}

console.log('Колличество партий: ', round)
console.log('Колличество выигранных партий: ', user)
console.log('Колличество проигранных партий: ', pc)
console.log(`Процентное соотношение выигранных партий: ${(user*100)/round}%`)

