const deleteAndEarn = require('../../src/740_deleteAndEarn/index')

test('[3,4,2] gives 6', () => {
  expect(
    deleteAndEarn([3,4,2])
  ).toBe(6);
});

test('[2,2,3,3,3,4] gives 9', () => {
    expect(
      deleteAndEarn([2,2,3,3,3,4])
    ).toBe(9);
  });

  

// Extra tests ...

test('[1,1,1,2,4,5,5,5,6] gives 18', () => {
  expect(
    deleteAndEarn([1,1,1,2,4,5,5,5,6])
  ).toBe(18);
});

test('[8,10,4,9,1,3,5,9,4,10] gives 37', () => {
  expect(
    deleteAndEarn([8,10,4,9,1,3,5,9,4,10])
  ).toBe(37);
});


// my own
test('[3,3,2,2,3,4,4,6] gives 18', () => {
  expect(
    deleteAndEarn([3,3,2,2,3,4,4,6])
  ).toBe(18);
});



