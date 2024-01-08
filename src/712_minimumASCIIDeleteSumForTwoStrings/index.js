
function minimumDeleteSum(s1, s2) {
    const [m, n] = [s1.length, s2.length];
    const dp = Array(m + 1).fill().map(_ => Array(n + 1).fill(0));

    for(let i = 1; i <= m; i++) dp[i][0] = dp[i-1][0] + s1.charCodeAt(i-1);
    for(let j = 1; j <= n; j++) dp[0][j] = dp[0][j-1] + s2.charCodeAt(j-1);

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(s1[i-1] == s2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(
                    s1.charCodeAt(i-1) + dp[i-1][j],   // remove last character from s1
                    s2.charCodeAt(j-1) + dp[i][j-1],   // remove last character from s2
                );
            }
        }
    }
    return dp[m][n];
}

module.exports = minimumDeleteSum;
