
function deleteAndEarn(nums) {

    const nums_weights_map = {};

    for(const num of [0, ...nums]) {
        if( ! (num in nums_weights_map) )
            nums_weights_map[num] = 0;
        nums_weights_map[num] += num;
    }

    const nums_weights_arr = Object.keys(nums_weights_map)
        .map(Number)
        .sort( (a, b) => a - b )
        .map( num => ({
            num,
            weight: nums_weights_map[num]
        }) )
    ;

    let [prev_max, curr_max] = [0, 0];
    let prev_num = 0;

    for(const elm of nums_weights_arr) {
        const [curr_num, curr_weight] = [elm.num, elm.weight];

        const new_max = 
            curr_num - prev_num == 1
                ? Math.max(curr_max, prev_max + curr_weight)
                : curr_max + curr_weight
        ;

        prev_num = curr_num;
        [prev_max, curr_max] = [curr_max, new_max];
    }

    return curr_max;
}

module.exports = deleteAndEarn;
