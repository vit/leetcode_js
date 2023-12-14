const minCostClimbingStairs = require('../../src/746_minCostClimbingStairs/index')

test('[10,15,20] gives 15', () => {
  expect(
    minCostClimbingStairs([10,15,20])
  ).toBe(15);
});

test('[1,100,1,1,1,100,1,1,100,1] gives 6', () => {
    expect(
      minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])
    ).toBe(6);
  });
  
  

