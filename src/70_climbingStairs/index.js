
function climbingStairs(n) {
    let stairs1 = function(a, b, n) {
        if(n == 1) return a;
        if(n == 2) return b;
        return stairs1(b, a+b, n-1);
    }
    return stairs1(1, 2, n);
}

module.exports = climbingStairs;
