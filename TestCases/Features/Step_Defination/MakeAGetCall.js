// var request = require('sync-request');
// var res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1');
// console.log(res.getBody());

// 4. Make a GET call. Assert the response status code and userId
// Test data - https://jsonplaceholder.typicode.com/posts/1

var request = require('request');
var assert = require('assert');
request.get('https://jsonplaceholder.typicode.com/posts/1', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:',  response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);

    assert.equal(200,response.statusCode , 'Assertion is Failed');

    var jsonContent = JSON.parse(body);
// Get Value from JSON
    console.log("User Id:", jsonContent.userId);


});