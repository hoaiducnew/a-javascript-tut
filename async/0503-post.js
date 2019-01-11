const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/posts/1';

module.exports = function (callback) {
    request(url, function (error, response, body) {
        if (error) {
            callback('Unable to fetch post.');
        } else {
            const post = JSON.parse(body);
            callback(post.body);
        }
    });
}