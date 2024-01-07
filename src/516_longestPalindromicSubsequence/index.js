
function longestPalindromeSubseq(s) {
    const n = s.length;
    const dp = Array(n).fill().map(_ => Array(n).fill(0));

    for(let left=n-1; left>=0; left--) {
        dp[left][left] = 1;
        for(let right=left+1; right<n; right++) {
            if(s[left] == s[right])
                dp[left][right] = 2 + dp[left+1][right-1];
            else
                dp[left][right] = Math.max(dp[left+1][right], dp[left][right-1]);
        }
    }
    return dp[0][n-1];
}

/*
function longestPalindromeSubseq(s) {
    const n = s.length;
    let max = 0;

    const dp_equals = Array(n).fill().map(_ => Array(n).fill(0));
    const dp_wings = Array(n).fill().map(_ => Array(n).fill(0));

    for(let left=0; left<n; left++) {
        for(let right=n-1; right>=left; right--) {
            if(s[left] == s[right]) dp_equals[left][right] = (left==right) ? 1 : 2;

            dp_wings[left][right] = Math.max(
                0,
                (left>0) ?              dp_wings[left-1][right]                                : 0,
                (right<n-1) ?           dp_wings[left][right+1]                                : 0,
                (left>0 && right<n-1) ? dp_wings[left-1][right+1] + dp_equals[left-1][right+1] : 0,
            );

            max = Math.max(max, dp_equals[left][right] + dp_wings[left][right]);
        }
    }
    return max;
}
*/

module.exports = longestPalindromeSubseq;

