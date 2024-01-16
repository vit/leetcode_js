
function uniquePaths(m, n) {
    const dp = Array(m+1).fill().map(_ => Array(n+1).fill(0));
    dp[0][1] = 1;
    for(let i=1; i<=m; i++) {
        for(let j=1; j<=n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m][n];
};

module.exports = uniquePaths;
