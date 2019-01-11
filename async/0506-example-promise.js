// function doWork(data, callback) {
//     callback('done');
//     // callback('done second');
// }
//
// function doWorkPromise(data) {
//     return new Promise(function (resolve, reject) {
//         // resolve('everything worked!');
//         // reject({
//         //     error: 'something bad happened'
//         // });
//         setTimeout(function () {
//             reject('everything is broken!');
//         }, 1000);
//     });
// }
//
// doWorkPromise('some data').then(function (data) {
//     console.log('Success!');
//     console.log(data);
// }, function (error) {
//     console.error('Error!');
//     console.error(error);
// });

var request = require('request');

function getPost(postId) {
    return new Promise(function (resolve, reject) {
        // var encodedLocation = encodeURIComponent(postId);
        var url = 'https://jsonplaceholder.typicode.com/posts/' + postId;

        if (!postId) {
            return reject('No id provided');
        }

        request(url, function (error, response, body) {
            if (error) {
                reject('Unable to fetch post.');
            } else {
                const post = JSON.parse(body);
                resolve(post.body);
            }
        });
    });
}

getPost(3).then(function (post) {
    console.log(post);
}, function (error) {
    console.error(error);
});
