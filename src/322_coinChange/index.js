
function coinChange(coins, amount) {
    const NO_RESULT = -1;
    const memo = [0, ...Array(amount).fill(Infinity)];
    for(const c of coins)
        for(let a = c; a <= amount; a++)
            memo[a] = Math.min(memo[a], memo[a-c] + 1);
    return memo[amount]==Infinity ? NO_RESULT : memo[amount];
}

module.exports = coinChange;
