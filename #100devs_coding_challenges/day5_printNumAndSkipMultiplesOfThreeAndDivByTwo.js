// Please create a function that takes in a number. Print all the numbers from 1
// to that number in the console, but skip any number that when multiplied by three is divisible by 2 evenly.


function numMultiAndDivi(num){      
  for(let i = 1; i <= num; i++){    
    if( (i * 3) % 2 !== 0 ){        
      console.log(i)                
    }                               
  }                                 
}                                   
                                    
numMultiAndDivi(100)         