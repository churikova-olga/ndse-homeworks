const fs = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const readline = require('readline')
const input = readline.createInterface(process.stdin, process.stdout)

function getRandomInt() {
    return (Math.floor(Math.random() * 2)+1);
}



const quest = function (q){
    return new Promise((resolve, reject) => {
        input.question(q, (ans) => {
            resolve(ans);
        })
    })
};


const quest1 = function (q){
    return new Promise((resolve, reject) => {
        input.question(q, (ans) => {
            resolve(ans);
        })
    })
};

input.on('close', (close) =>{console.log('FINISH')});

(async ()=>{

    while (true) {
        const ans = await quest1('Начать игру? (да/нет): ');

        if (ans === 'нет'){
            input.close();
            break;
        }

        else if (ans === 'да') {
            let result = getRandomInt()
            while (true) {
                const ans1 = Number(await quest('Орел или решка (1 или 2): '));
                if (ans1 === 1 || ans1 === 2) {
                    let coin = ''
                    if (ans1 === result) {
                        coin = ans1 === 1 ? 'Орел' : 'Решка'
                        console.log(`Вы отгадали: ${coin}`);
                        fs.appendFile(`${argv['_'][0]}`, `Победил игрок было загадано ${coin} \n`, 'UTF8', function (err) {
                            if (err) throw err;
                        });
                        break;

                    } else {
                        if (isNaN(ans1)) {
                            console.log("Введите число")
                        } else {
                            coin = result === 1 ? 'Орел' : 'Решка'
                            console.log(`Вы не отгадали: ${coin}`);
                            fs.appendFile(`${argv['_'][0]}`, `Победил компьютер было загадано ${coin} \n`, 'UTF8', function (err) {
                                if (err) throw err;
                            });
                            break;
                        }
                    }
                } else {
                    console.log('Ошибка')
                }

            }

        }
        else {
            console.log('Не распознано')
        }
    }
})()

