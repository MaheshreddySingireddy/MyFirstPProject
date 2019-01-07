var {defindSupportCode} = require('cucumber');
var world=require('fs');


defineSupportCode(function({And, But, Given, Then, When, After}) {
    Given (/^I read an XML file from the path (.*)$/, function(arg1){
        console.log('arg1');

    });
});