
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

    let [prev_max, current_max] = [0, 0];
    for(let i=1; i < nums_weights_arr.length; i++) {
        const new_max = 
        nums_weights_arr[i].num - nums_weights_arr[i-1].num != 1
        ? current_max + nums_weights_arr[i].weight
            : Math.max(current_max, prev_max + nums_weights_arr[i].weight);

        [prev_max, current_max] = [current_max, new_max];
    }

    return current_max;
}

module.exports = deleteAndEarn;
