Challenge - Twice as old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

Solution 1: 

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
 return (sonYearsOld * 2 > dadYearsOld ? sonYearsOld * 2 - dadYearsOld : dadYearsOld-sonYearsOld * 2 )
}

Solution 1:

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}