var request = require('request');
var url = 'https://jsonplaceholder.typicode.com/posts/1';

request(url, function (error, response, body) {
    if (error) {
        console.log('Unable to fetch posts.');
    } else {
        const post = JSON.parse(body);
        console.log('Title: ' + post.title);
        console.log('Body: ' + post.body);
    }
});

console.log('After request!');