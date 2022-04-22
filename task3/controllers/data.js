const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
const data = path.join(rootDir, 'data', 'data.json');


exports.getData = (req, res, next) => {
    fs.readFile(data, (err, fileContent) => {
        if (err) {
            throw new Error(err)
        }
        res.json(JSON.parse(fileContent))
    })
}


