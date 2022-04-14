const readline = require('readline')
const input = readline.createInterface(process.stdin, process.stdout)
const max = 1000

const quest = function (q){
    return new Promise((resolve, reject) => {
        input.question(q, (ans) => {
            resolve(ans);
        })
    })
};
//

input.on('close', (close) =>{console.log('FINISH')});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

(async ()=>{
    let result = getRandomInt(max)
    let count = 1
    let a = result-getRandomInt(max)
    let b = result+getRandomInt(max)
    let range = `Загадано число в диапазоне от ${a} до ${b}`
    console.log(range)
    while (true) {
        console.log(`${count} попытка`);
        const ans1 = Number(await quest('Введите команду: '));
            if (ans1 === result) {
                console.log(`Вы отгадали число: ${ans1} за ${count} попыток`);
                input.close();
                break;
            } else {
                if (isNaN(ans1)) {
                    console.log("Введите число")
                }
                else {
                    console.log("Вы ввели", ans1);
                    if (Number(ans1) > result) {
                        console.log("Меньше")
                    } else {
                        console.log("Больше")
                    }
                    count++;
                }
            }
        }
})()

