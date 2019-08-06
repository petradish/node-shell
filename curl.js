const request = require('request');

module.exports = (done, website) => {
    request(website, function (error, body) {
        if (error){
            done('something went wrong!');
        } else {
            done(body);
        }
    })
};