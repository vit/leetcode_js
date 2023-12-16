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
  
  

