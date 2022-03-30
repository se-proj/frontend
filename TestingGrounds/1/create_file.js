// import fs from 'fs'
const fs = require('fs');

const createFile = (path, content) => {
    fs.writeFile(path, content, (err) => {
        if (err) throw err;
        console.log('Saved!');
    })
}

let path = __dirname + "\\File\\static.js"
let content = "const n = 10"

createFile(path, content)