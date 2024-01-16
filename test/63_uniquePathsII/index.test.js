const uniquePathsWithObstacles = require('../../src/63_uniquePathsII/index')


test('[[0,0,0],[0,1,0],[0,0,0]] gives 2', () => {
  expect(
    uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])
  ).toBe(2);
});

test('[[0,1],[0,0]] gives 1', () => {
  expect(
    uniquePathsWithObstacles([[0,1],[0,0]])
  ).toBe(1);
});

