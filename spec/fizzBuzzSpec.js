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
