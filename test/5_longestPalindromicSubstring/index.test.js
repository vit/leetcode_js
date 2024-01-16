const  uniquePaths = require('../../src/62_uniquePaths/index')


test('3, 7 gives 28', () => {
  expect(
    uniquePaths(3, 7)
  ).toBe(28);
});

test('3, 2 gives 3', () => {
  expect(
    uniquePaths(3, 2)
  ).toBe(3);
});



