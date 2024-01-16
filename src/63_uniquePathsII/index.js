
function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    const dp = Array(m+1).fill().map(_ => Array(n+1).fill(0));
    dp[0][1] = 1;

    for(let i=1; i<=m; i++) {
        for(let j=1; j<=n; j++) {
            dp[i][j] =
                (obstacleGrid[i-1][j-1]==0)
                    ? dp[i-1][j] + dp[i][j-1]
                    : 0;
        }
    }
    return dp[m][n];
};

module.exports = uniquePathsWithObstacles;
