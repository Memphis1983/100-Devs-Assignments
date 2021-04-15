Challenge: Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

Solution: 

function abbrevName(name){
  let convertedName = name.split(" ")
   return (convertedName[0][0] + "." + convertedName[1][0].toUpperCase());
}

Solution 2: 

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}