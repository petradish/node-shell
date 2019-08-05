//output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //removes the newline
    let cmd1 = '';
    let argForCmd = '';
    if (cmd.includes(' ')){
        const cmdArr = cmd.split(' ');
        cmd1 = cmdArr[0];
        argForCmd = cmdArr[1];
    }

    if (cmd === 'pwd'){
        const pwd = require('./pwd');
        pwd();
    }
    if (cmd === 'ls') {
        const ls = require('./ls');
        ls();
    }
    if (cmd1 === 'cat'){
        const cat = require('./cat');
        cat(argForCmd);
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }
})


