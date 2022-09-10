const path = require('path');
const fs = require('fs');

const filename = path.join(__dirname, '..', 'day1', 'ex11.html');
const newFilename = path.join(__dirname, '..', 'day1', 'ex11_uppercae.html');

fs.exists(filename, (exists) => {
    if (exists) {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) throw err;

            data = data.toUpperCase();
            fs.writeFile(newFilename, data, (err) => {
                if (err) throw err;

                console.log(
                    'The uppercase version of the',
                    filename,
                    'is saved to',
                    newFilename
                );
            });
        });
    } else {
        throw Error(`The file "${filename}" does not seem to exist!`);
    }
});
