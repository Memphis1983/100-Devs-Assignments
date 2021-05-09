Challenge: Get the mean of an array

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

Solution: 

function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  const total = marks.reduce((acc, c) => acc +  c, 0);
  return Math.floor(total / marks.length);
}