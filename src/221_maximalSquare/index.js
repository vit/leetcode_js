function maximalSquare(matrix) {

    let maxEdge = 0;
    for(let i=0; i<matrix.length; i++)
        for(let j=0; j<matrix[i].length; j++) {
            if(i>0 && j>0 && matrix[i][j] > 0)
                matrix[i][j] = 1 + Math.min(
                    matrix[i-1][j-1],
                    matrix[i-1][j],
                    matrix[i][j-1]
                );
            maxEdge = Math.max(maxEdge, matrix[i][j]);
        }
    return maxEdge*maxEdge;

};
module.exports = maximalSquare;
