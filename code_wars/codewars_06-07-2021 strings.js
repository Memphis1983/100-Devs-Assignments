Challenge - Regexp Basics - is it a digit?

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


Solution : 



String.prototype.digit = function() {
  return this.match(/^[0-9]$/) ? true : false;
};