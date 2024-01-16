const minPathSum = require('../../src/64_minimumPathSum/index')


test('[[1,3,1],[1,5,1],[4,2,1]] gives 7', () => {
  expect(
    minPathSum([[1,3,1],[1,5,1],[4,2,1]])
  ).toBe(7);
});

test('[[1,2,3],[4,5,6]] gives 12', () => {
  expect(
    minPathSum([[1,2,3],[4,5,6]])
  ).toBe(12);
});


