const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let date = new Date()

if (argv['_'].includes('cmd')){
    let a = 0

    if (argv['_'].includes('current')) {
        if (argv['years'] || argv['y']){
            console.log(date.getFullYear())
        }
        else if (argv['month'] || argv['m']){
            console.log(date.getMonth())
        }
        else if (argv['date'] || argv['d']){
            console.log(date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear())
        }
        else if (Object.keys(argv).length===2){
            console.log(date)
        }
    }

    else {
        if (argv['_'].includes('add') || argv['_'].includes('sub')) {

            if (argv['_'].includes('add')) {
                a = 1
            } else if (argv['_'].includes('sub')) {
                a = -1
            }

            if (argv['years']) {
                date.setFullYear(date.getFullYear() + argv['years'] * a);
            } else if ((argv['y'])) {
                date.setFullYear(date.getFullYear() + argv['y'] * a);
            }

            if (argv['month']) {
                date.setMonth(date.getMonth() + argv['month'] * a);
            } else if ((argv['m'])) {
                date.setFullYear(date.getFullYear() + argv['m'] * a);
            }

            if (argv['date']) {
                date.setDate(date.getDate() + argv['date'] * a);
            } else if (argv['d']) {
                date.setDate(date.getDate() + argv['d'] * a);
            }

            console.log(date)
        }
    }
}


