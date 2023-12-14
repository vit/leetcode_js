
function minCostClimbingStairs(cost) {
    let [a, b]  = [0, 0];
    for(let v of [...cost, 0])
        [a, b] =  [b, v + Math.min(a, b)];
    return b;
}

module.exports = minCostClimbingStairs;
