const maximalSquare = require('../../src/221_maximalSquare/index')

test('[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]] gives 4', () => {
  expect(
    maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])
  ).toBe(4);
});

test('[["0","1"],["1","0"]] gives 1', () => {
  expect(
    maximalSquare([["0","1"],["1","0"]])
  ).toBe(1);
});

test('[["0"]] gives 0', () => {
  expect(
    maximalSquare([["0"]])
  ).toBe(0);
});



