const minFallingPathSum = require('../../src/931_minimumFallingPathSum/index')


test('[[2,1,3],[6,5,4],[7,8,9]] gives 13', () => {
  expect(
    minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])
  ).toBe(13);
});

test('[[-19,57],[-40,-5]] gives -59', () => {
  expect(
    minFallingPathSum([[-19,57],[-40,-5]])
  ).toBe(-59);
});

