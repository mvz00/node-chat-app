var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.subtract(50, 'years');
// console.log(date.format('h:mm a'));

var createdAt = 1234
var date = moment(createdAt);
console.log(date.format('h:mm a'));