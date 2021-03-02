var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log(buffer1.length);
console.log("buffer3 content: " + buffer3.toString());

var buffer4 = new Buffer("Abcd");
var buffer5 = new Buffer("Abcd");
var result = buffer4.compare(buffer5);

if(result < 0) {
console.log("before");
} else if(result == 0) { 
  console.log("equal");
} else {
  console.log("after");
}

var buffer6 = new Buffer(77);
buffer1.copy(buffer6);
console.log("buffer6 content: " + buffer6.toString());

var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());