
function minPathSum(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array(m).fill().map(_ => Array(n).fill(0));

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(i==0 && j==0) {
                dp[i][j] = grid[i][j];
            } else {
                const top = (i>0) ? dp[i-1][j] : Infinity;
                const left = (j>0) ? dp[i][j-1] : Infinity;
                dp[i][j] = grid[i][j] + Math.min(top, left);
            }
        }
    }

    return dp[m-1][n-1];
};

module.exports = minPathSum;
