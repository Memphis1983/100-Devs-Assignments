//create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

const numArray = [10, 20, 30, 40];


function dingDong(numArray) {
	let firstValue = numArray[0]
  let lastValue = numArray.length -1;
	let finalValue = firstValue + lastValue;
	console.log(finalValue);
}

dingDong(numArray);

//OR

function addFirstAndLastValArray(arr){
  console.log( arr[0] + arr[arr.length-1] )
}                                   
addFirstAndLastValArray([1,2,3,4,5])