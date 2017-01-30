describe("fizzBuzz", function() {
  it("result to equal Fizz", function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it("result to equal Buzz", function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it("result to equal FizzBuzz", function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });
});
