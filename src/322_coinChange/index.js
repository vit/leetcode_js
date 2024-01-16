
function coinChange(coins, amount) {
    const NO_RESULT = -1;
    const dp = [0, ...Array(amount).fill(Infinity)];
    for(const c of coins)
        for(let a = c; a <= amount; a++)
            dp[a] = Math.min(dp[a], dp[a-c] + 1);
    return dp[amount]==Infinity ? NO_RESULT : dp[amount];
}

module.exports = coinChange;
