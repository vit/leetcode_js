const editDistance = require('../../src/72_editDistance/index')


describe("editDistance", () => {

  test('word1 = "horse", word2 = "ros" gives 3', () => {
    expect(
      editDistance("horse", "ros")
    ).toBe(3);
  });
  
  test('word1 = "intention", word2 = "execution" gives 5', () => {
    expect(
      editDistance("intention", "execution")
    ).toBe(5);
  });

  // Extra

  test('word1 = "abcdxabcde", word2 = "abcdeabcdx" gives 2', () => {
    expect(
      editDistance("abcdxabcde", "abcdeabcdx")
    ).toBe(2);
  });


});

