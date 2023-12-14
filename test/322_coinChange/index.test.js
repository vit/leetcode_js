const coinChange = require('../../src/322_coinChange/index')

test('coins = [1,2,5], amount = 11 gives 3', () => {
  expect(
    coinChange([1,2,5], 11)
  ).toBe(3);
});

test('coins = [2], amount = 3 gives -1', () => {
  expect(
    coinChange([2], 3)
  ).toBe(-1);
});

test('coins = [1], amount = 0 gives 0', () => {
  expect(
    coinChange([1], 0)
  ).toBe(0);
});



