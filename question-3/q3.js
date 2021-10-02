const dr = __dirname;
console.log(`'${dr}'`)
const logCount = 10;
const fs = require('fs');

createLogFiles = () =>{
    fs.readdir(dr, (err, files) => {
        for(let i = 0; i<logCount; i++){
            let logName = `log${i}.txt`;
            console.log(`${logName}`);
            if(!files.includes(logName)){
                fs.open(`${dr}\\${logName}`, 'w', (err, file) => {});
            }
        }
    });
}

deleteLogFiles = () =>{
    fs.readdir(dr, (err, files) => {
        files.forEach(file => {
            if(file.includes('log') > 0){
                fs.unlink(`${dr}\\${file}`,(err) => {
                    if (err) throw err;
                    console.log(`deleted file ...${file}`);
                });
            }
        });
    });
}




createLogFiles();
deleteLogFiles();