const longestPalindromicSubsequence = require('../../src/516_longestPalindromicSubsequence/index')

describe("longestPalindromicSubsequence", () => {

  test('"bbbab" gives 4', () => {
    expect(
      longestPalindromicSubsequence("bbbab")
    ).toBe(4);
  });

  test('"cbbd" gives 2', () => {
    expect(
      longestPalindromicSubsequence("cbbd")
    ).toBe(2);
  });

  // // Extra

  test('"abcabcabcabc" gives 7', () => {
    expect(
      longestPalindromicSubsequence("abcabcabcabc")
    ).toBe(7);
  });



  test('"abcdabcdabcdabcd" gives 7', () => {
    expect(
      longestPalindromicSubsequence("abcdabcdabcdabcd")
    ).toBe(7);
  });

  // test('"euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew" gives 7', () => {
  //   expect(
  //     longestPalindromicSubsequence("euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew")
  //   ).toBe(7);
  // });


  test('"abcba" gives 5', () => {
    expect(
      longestPalindromicSubsequence("abcba")
    ).toBe(5);
  });

  test('"XabYcbXa" gives 5', () => {
    expect(
      longestPalindromicSubsequence("XabYcbXa")
    ).toBe(5);
  });



});

