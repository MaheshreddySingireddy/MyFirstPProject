// Q 5. Make a POST call. Assert the response status code and id
// Test data - https://jsonplaceholder.typicode.com/posts
//
// body: {
//     title: 'foo',
//         body: 'bar',
//         userId: 1
// }
// headers:"Content-type": "application/json; charset=UTF-8"

var request = require('request');
var assert = require('assert');
var jsonContent;

request.post({url:'https://jsonplaceholder.typicode.com/posts', json: {
        title: 'foo',
        body: 'bar',
        userId: 1
    }}, function(error,response,body){
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:',  response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);

    assert.equal(201,response.statusCode , 'Assertion is Failed');

       //var jsonContent = JSON.parse(body);

      //      assert.equal(101,jsonContent.id, 'Assertion is Failed');

});

