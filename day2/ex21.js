const path = require('path');
const fs = require('fs/promises');

const filename = path.join(__dirname, '..', 'day1', 'ex11.html');
const newFilename = path.join(__dirname, '..', 'day1', 'ex11_uppercase.html');

// fs.access(filename)
//     .then(() => fs.readFile(filename, 'utf-8'))
//     .then((content) => content.toUpperCase())
//     .then((content) => fs.writeFile(newFilename, content))
//     .then(() => console.log('new file created'))
//     .catch((err) => console.log(err));

(async () => {
    try {
        await fs.access(filename);
        let content = await fs.readFile(filename, 'utf-8');
        content = content.toUpperCase();
        await fs.writeFile(newFilename, content);
        console.log('The new file is created');
    } catch (err) {
        console.log(err);
    }
})();
