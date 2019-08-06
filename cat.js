const fs = require('fs')

module.exports = (done, path) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      done('Something went wrong!')
    } else {
      done(data);
  
    }
  })
}
