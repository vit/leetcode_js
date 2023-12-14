const coinChangeII = require('../../src/518_coinChangeII/index')

test('coins = [1,2,5], amount = 5 gives 4', () => {
  expect(
    coinChangeII(5, [1,2,5])
  ).toBe(4);
});

test('coins = [2], amount = 3 gives 0', () => {
  expect(
    coinChangeII(3, [2])
  ).toBe(0);
});

test('coins = [10], amount = 10 gives 1', () => {
  expect(
    coinChangeII(10, [10])
  ).toBe(1);
});



