
function deleteAndEarn(nums) {

    const nw_map = {};

    for(const num of nums)
        nw_map[num] = (nw_map[num] || 0) + num;

    const nw_sorted = Object.entries(nw_map)
        .sort((a, b) => a[0] - b[0]);

    let [prev_max, curr_max] = [0, 0];
    let prev_num = 0;

    for(const [num, weight] of nw_sorted) {
        const collision = num - prev_num == 1;

        const new_max = collision
            ? Math.max(curr_max, prev_max + weight)
            : curr_max + weight;

        prev_num = num;
        [prev_max, curr_max] = [curr_max, new_max];
    }

    return curr_max;
}

module.exports = deleteAndEarn;
