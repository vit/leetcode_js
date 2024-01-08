const numDistinct = require('../../src/115_distinctSubsequences/index')


describe("numDistinct", () => {

  test('s = "rabbbit", t = "rabbit" gives 3', () => {
    expect(
      numDistinct("rabbbit", "rabbit")
    ).toBe(3);
  });
  
  test('s = "babgbag", t = "bag" gives 5', () => {
    expect(
      numDistinct("babgbag", "bag")
    ).toBe(5);
  });

  // Extra



});

