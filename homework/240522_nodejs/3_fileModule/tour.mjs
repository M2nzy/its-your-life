import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

import fs from "fs";

rl.question(`가고싶은 여행지 입력 >>`, tourName => {
    const path = "tour.txt";
    fs.writeFile(path, tourName, { encoding: "utf8"}, (err) =>{
        if (err) throw err;
    })
    rl.close();
});