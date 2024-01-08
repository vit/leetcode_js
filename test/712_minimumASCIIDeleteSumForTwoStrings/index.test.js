const minimumDeleteSum = require('../../src/712_minimumASCIIDeleteSumForTwoStrings/index')


describe("minimumDeleteSum", () => {

  test('s1 = "sea", s2 = "eat" gives 231', () => {
    expect(
      minimumDeleteSum("sea", "eat")
    ).toBe(231);
  });
  
  test('s1 = "delete", s2 = "leet" gives 403', () => {
    expect(
      minimumDeleteSum("delete", "leet")
    ).toBe(403);
  });

  // Extra


});

