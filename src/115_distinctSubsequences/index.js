
function numDistinct(s, t) {
    const [m, n] = [s.length, t.length];

    const dp = Array(n + 1).fill(0);
    dp[0] = 1;

    for(let i = 0; i < m; i++) {
        for(let j = i; j >= 0; j--) {
            if(s[i] == t[j]) {
                dp[j+1] += dp[j];
            }
        }
    }
    return dp[n];
};

module.exports = numDistinct;
