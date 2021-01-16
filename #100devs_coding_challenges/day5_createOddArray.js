//Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 

function newArrOdd(arr) {
//create an empty array to hold the old values
	let newArr = [];
  //iteration
  arr.forEach((item, i) => {
  	if (item % 3 === 0) {
    	newArr.push(item);
    }
    console.log(newArr);
  });
  
}

newArrOdd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);


/*----------------------
 using filter() method
*-----------------------/

const thatArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const thisArray = thatArray.filter(item => item % 3 === 0); 

console.log(thisArray);