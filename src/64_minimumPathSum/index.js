
function minPathSum(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array(m).fill().map(_ => Array(n).fill(0));

    for(let i=0; i<m; i++) {
        dp[i][0] = grid[i][0];
        if(i>0) dp[i][0] += dp[i-1][0];
    }
    for(let j=0; j<n; j++) {
        dp[0][j] = grid[0][j]
        if(j>0) dp[0][j] += dp[0][j-1];
    }

    for(let i=1; i<m; i++) {
        for(let j=1; j<n; j++) {
            const top = dp[i-1][j];
            const left = dp[i][j-1];
            dp[i][j] = grid[i][j] + Math.min(top, left);
        }
    }

    return dp[m-1][n-1];
};

module.exports = minPathSum;
