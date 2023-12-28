const wordBreak = require('../../src/139_wordBreak/index')


test('s = "leetcode", wordDict = ["leet","code"] gives true', () => {
  expect(
    wordBreak("leetcode", ["leet","code"])
  ).toBe(true);
});

test('s = "applepenapple", wordDict = ["apple","pen"] gives true', () => {
  expect(
    wordBreak("applepenapple", ["apple","pen"])
  ).toBe(true);
});

test('s = "catsandog", wordDict = ["cats","dog","sand","and","cat"] gives false', () => {
  expect(
    wordBreak("catsandog", ["cats","dog","sand","and","cat"])
  ).toBe(false);
});


// more

test('s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab" wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"] gives false', () => {
  expect(
    wordBreak(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
      ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
      )
  ).toBe(false);
});



/*
test('2 gives 2', () => {
  expect(
    longestPalindrome(2)
  ).toBe(2);
});

test('3 gives 3', () => {
  expect(
    longestPalindrome(3)
  ).toBe(3);
});
*/


