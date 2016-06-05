/**
 * Chapter 04
 * A list
 */

'use strict';

function arrayToList(array) {
  var list = {};

  for (var i = array.length; i >= 0; i--) {
    list.value = array[i];
  }

  return list;
}

console.log(arrayToList([0,1,2,3,5]));
