
function deleteAndEarn(nums) {
    const nums_map = {};

    for(const n of [0, ...nums])
        nums_map[n] = n in nums_map ? nums_map[n] + 1 : 1;

    const nums_arr = Object.entries(nums_map)
        .map( ([n, cnt]) => ({n, price: n*cnt}) )
        .sort( (a, b) => a.n - b.n )
    ;

    let prev_max = current_max = 0;

    for(let i=1; i < nums_arr.length; i++) {
        const base_max = nums_arr[i].n - nums_arr[i-1].n == 1 ? prev_max : current_max;
        const current_sum = base_max + nums_arr[i].price

        const new_max = Math.max(current_max, current_sum);
        [prev_max, current_max] = [current_max, new_max];
    }

    return current_max;
}

module.exports = deleteAndEarn;
