function printHello() {
  console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);

function printHello() {
  console.log( Date());
}

// Now call above function after 2 seconds
setInterval(printHello, 1000);