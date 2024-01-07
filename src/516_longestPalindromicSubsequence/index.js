
function longestPalindromeSubseq(s) {
    const n = s.length;
    let max = 0;

    const dp_equals = new Array(n).fill(0).map(_ => new Array(n).fill(0));
    const dp_wings = new Array(n).fill(0).map(_ => new Array(n).fill(0));

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

module.exports = longestPalindromeSubseq;

