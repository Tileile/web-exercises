const fs = require("fs");

fs.writeFile("test-file.txt", "This is sample data written to file", (err) => {
    if (err){
        console.error('Error writing file:', err);
    }
    else{
        console.log('Data written test-file.txt');
    }
});

fs.readFile("test-file.txt", 'utf-8', (err, data) => {
    if (err){
        console.error('Error reading file:', err);
    }else{
        console.log('File contents: ', data);
    }
})
