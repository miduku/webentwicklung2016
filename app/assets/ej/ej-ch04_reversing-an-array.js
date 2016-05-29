/**
 * Chapter 04
 * Reversing an array
 */

'use strict';

var arr = [0,1,2,3,4,5];

function reverseArray(array) {
  var output = [];

  for (var i = 0; i < array.length; i++) {
    output.unshift(array[i]);
  }

  return output;
}

console.log(reverseArray(arr));
