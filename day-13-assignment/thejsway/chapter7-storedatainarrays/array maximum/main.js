const array = [3, 11, 7, 2, 9, 10];

let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
    console.log(max);
  }                  
}                    
                     