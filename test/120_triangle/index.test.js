const triangle = require('../../src/120_triangle/index')

test('[[2],[3,4],[6,5,7],[4,1,8,3]] gives 11', () => {
  expect(
    triangle([[2],[3,4],[6,5,7],[4,1,8,3]])
  ).toBe(11);
});

test('[[-10]] gives -10', () => {
  expect(
    triangle([[-10]])
  ).toBe(-10);
});



