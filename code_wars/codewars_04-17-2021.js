Challenge: Enumerable Magic #25 - Take the First N Elements

Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


Solution: 
function take(arr, n) {
  return  arr.length < n ? arr.slice(): arr.slice(0, n)
}