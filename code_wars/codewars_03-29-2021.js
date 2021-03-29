Challenge: Remove consecutive duplicate words

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

Solution: 

const removeConsecutiveDuplicates = s => {
  const duplicates = [];
  s = s.split(' ');
  for (let i = 1; i <= s.length; i++){
    if (s[i] !== s[i-1]){
      duplicates.push(s[i-1])
    }
  }
  return duplicates.join(' ')
}