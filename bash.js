//output a prompt
process.stdout.write('prompt > ');
const done = (output) => {
    console.log(output);
    process.stdout.write('prompt > ');
}
//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //removes the newline
    let cmd1 = '';
    let cmdArg = '';
    if (cmd.includes(' ')){
        const cmdArr = cmd.split(' ');
        cmd1 = cmdArr[0];
        cmdArg = cmdArr[1];
    }
    
    if (cmd === 'pwd'){
        const pwd = require('./pwd');
        pwd(done);
    } else if (cmd === 'ls') {
        const ls = require('./ls');
        ls(done);
    } else if (cmd1 === 'cat'){
        const cat = require('./cat');
        cat(done, cmdArg);
    } else if (cmd1 === 'curl'){
        const curl = require('./curl');
        curl(done, cmdArg);
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
})
