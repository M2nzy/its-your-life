import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

import fs from "fs";

rl.question(`보고싶은 영화 입력 >>`, movieName => {
    const path = "movie.txt";
    fs.writeFile(path, movieName, { encoding: "utf8"}, (err) =>{
        if (err) throw err;
    })
    rl.close();
});