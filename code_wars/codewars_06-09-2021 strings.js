Challenge - 
Name Shuffler

Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"


Solution : 



function nameShuffler(str){
  //Shuffle It
  let swappedStr = str.split(" ").reverse().join(" ")
  return swappedStr
  
}