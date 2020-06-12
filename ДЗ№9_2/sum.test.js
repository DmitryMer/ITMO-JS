const sum = require('./sum');

test('подставляем x = 4, y = 2.25', () => {
  expect(sum(4, 2.25)).toBe(2.25);
});


