function fizzBuzz(number) {
  var result = "";
  if (number % 3 == 0) {result += 'Fizz'};
  if (number % 5 == 0) {result += 'Buzz'};
  if (result == "") {return number} else {return result} ;
}




function FizzBuzz2() {}

FizzBuzz2.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
}

FizzBuzz2.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}
