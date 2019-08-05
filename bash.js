//output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //removes the newline

    if (cmd === 'pwd'){
        const pwd = require('./pwd')
        pwd()
    }
    if (cmd === 'ls') {
        const ls = require('./ls')
        ls()
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }
})


