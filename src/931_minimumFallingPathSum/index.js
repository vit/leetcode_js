
function minFallingPathSum(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    for(let i = 1; i<m; i++) {
        for(let j = 0; j<n; j++) {
            const left = (j>0) ? matrix[i-1][j-1] : Infinity;
            const right = (j<n-1) ? matrix[i-1][j+1] : Infinity;
            const top = matrix[i-1][j];
            matrix[i][j] += Math.min(left, top, right);
        }
    }
    return Math.min( ...matrix[m-1] );
};

module.exports = minFallingPathSum;
