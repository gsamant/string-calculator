const calculator = require('./calculator')
 
test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });

test('string with a 3 numbers should result in the sum', () => {
    expect(calculator.add('1,2,3')).toBe(6);
  });