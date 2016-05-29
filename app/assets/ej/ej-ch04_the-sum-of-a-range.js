/**
 * Chapter 04
 * The sum of a range
 */

'use strict';

// range
function range(n, m, steps) {
  var output = [];

  if (typeof steps === 'undefined') {
    steps = 1;
  }

  if (n < m) {
    for (var i = n; i <= m; i+=steps) {
      output.push(i);
    }
  } else {
    for (var i = n; i >= m; i-=steps) {
      output.push(i);
    }
  }

  return output;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 0, 2));



// sum
function sum(array) {
  var output = 0;

  for (var i = 0; i < array.length; i++) {
    output += array[i];
  }

  return output;
}

console.log(sum(range(1, 10)));
