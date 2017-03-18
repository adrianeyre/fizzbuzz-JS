# FizzBuzz - Javascript #
#### Technologies: Javascript, Jasmine
### [Makers Academy](http://www.makersacademy.com) - Week 5 Pair Programming Project

* [Setting up the application](#setup)
* [Running Jasmine tests](#jasmine)
* [Jasmine Tests](#tests)
* [Javascript Code](#java)

## The Challenge ##
The challenge was to make a simple “FizzBuzz” program that accepted one integer value into a function called fizzBuzz. The function checks for the following conditions: if the integer is divisible by 3 it returns ‘Fizz’, if the integer is divisible by 5 it returns ‘Buzz’, if the integer is divisible by 3 and 5 it returns ‘FizzBuzz’ and if none of the conditions are met it returns the integer. Example below
```shell
1 --> 1
2 --> 2
3 --> Fizz
4 --> 4
5 --> Buzz
6 --> Fizz
7 --> 7
8 --> 8
9 --> Fizz
10 --> Buzz
11 --> 11
12 --> Fizz
13 --> 13
14 --> 14
15 --> FizzBuzz
16 --> 16
17 --> 17
18 --> Fizz
19 --> 19
20 --> Buzz
```

## <a name="setup">Setting up the applicaion</a>
```
$ git clone https://github.com/adrianeyre/fizzbuzz-JS
$ cd fizzbuzz-JS
```

## <a name="jasmine">Running Jasmine tests</a>
```
$ open -a safari SpecRunner.html
```

## <a name="tests">Jasmine Tests</a> ##

Jasmine tests
```javascript
describe("fizzBuzz", function() {
  it("fizzBuzz(3) result to equal Fizz", function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it("fizzBuzz(5) result to equal Buzz", function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it("fizzBuzz(15) result to equal FizzBuzz", function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it("fizzBuzz(7) result to equal 7", function() {
    expect(fizzBuzz(7)).toEqual(7);
  });
});


describe('FizzBuzz2', function() {

  var fizzBuzz2;

  beforeEach(function() {
    fizzBuzz2 = new FizzBuzz2();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz2.play(3)).toEqual('Fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzBuzz2.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz2.play(5)).toEqual('Buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzBuzz2.play(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('fizzbuzzes for 15', function() {
      expect(fizzBuzz2.play(15)).toEqual('FizzBuzz');
    });

    it('fizzbuzzes for 30', function() {
      expect(fizzBuzz2.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('all other numbers', function() {
    it('1 for 1', function() {
      expect(fizzBuzz2.play(1)).toEqual(1);
    });

    it('11 for 11', function() {
      expect(fizzBuzz2.play(11)).toEqual(11);
    });
  });
});
```

## <a name="java">Javascript Code</a> ##
```javascript
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
```
