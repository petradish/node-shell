const fs = require('fs')

module.exports = (path) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
      process.stdout.write('prompt > ')
    }
  })
}
