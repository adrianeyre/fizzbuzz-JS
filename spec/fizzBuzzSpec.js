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
