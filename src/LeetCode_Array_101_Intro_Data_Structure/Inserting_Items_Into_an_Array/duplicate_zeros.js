/* Leetcode - Array 101: Duplicate Zeros */

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

/*
    Input: [1,0,2,3,0,4,5,0]
    Output: null
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
*/

const duplicateZeros = function(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === 0) {
        // splice fügt hinter index i eine 0 ein: index, wie viele Elemente, Element
        arr.splice(i, 0, 0);
        // geht einen Index weiter und zusammen mit i++ oben sogar 2, weil sonst eine Endlosschleife beginnen würde, weil der nächste index immer 0 ist.
        i++;
        // löscht letztes Element im Array, wenn index 0 ist
        arr.pop(); 
      }
    } 
};
  
duplicateZeros([1,0,2,3,0,4,5,0]); // [1, 0, 0, 2, 3, 0, 0, 4]
