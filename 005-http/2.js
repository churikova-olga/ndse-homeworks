const http = require('http')
require('dotenv').config();
const readline = require("readline");
const input = readline.createInterface(process.stdin, process.stdout)

input.question('Введите город: ', (answer) => {
    apiHttp(answer)
    console.log(
        `Был введен город: ${answer}`
        );
    input.close()
})

const apiHttp = (answer)=> {
    const api = `http://api.weatherstack.com/current?access_key=${process.env.AccessKey}&query=${answer}`
    http.get(api, (res) => {
        const statusCode = res.statusCode;
        if (statusCode !== 200) {
            console.error(`Status Code: ${statusCode}`);
            return;
        }
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            let parsedData = JSON.parse(rawData);
            console.log(parsedData)
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`)
    })
}