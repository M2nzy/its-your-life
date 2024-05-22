const fs = require('fs');

// fs.readFile(path1, "utf8", (error, data) => {
//     if(error) throw error;
//     console.log("readFile");
//     console.log(data);
// })

const path1 = "me.txt";
const readData = fs.readFileSync(path1, {encoding:"utf8"});
console.log("readFileSync");
console.log(readData);



if (readData){
    const path3 = "you.txt";
    const addText = "************\n나는 별이야\n제일 빛나\n************";
    fs.writeFile(path3, addText, { encoding: "utf8"}, (err) =>{
        if (err) throw err;
        const readData = fs.readFileSync(path3, {encoding:"utf8"});
        console.log(readData);
    })
}