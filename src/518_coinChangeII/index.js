
function coinChangeII(coins, amount) {
    const memo = [1, ...Array(amount).fill(0)];
    for(const c of coins)
        for(let a = c; a <= amount; a++)
            memo[a] += memo[a-c];
        return memo[amount];
}

module.exports = coinChangeII;
