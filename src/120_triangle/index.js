function minimumTotal(triangle) {
    for(let i=triangle.length-2; i>=0; i--) {
        let curr=triangle[i];
        let prev=triangle[i+1];
        for(let j=0; j<triangle[i].length; j++)
            curr[j] = curr[j] + Math.min(prev[j], prev[j+1]);
    }
    return triangle[0][0];
};

module.exports = minimumTotal;
