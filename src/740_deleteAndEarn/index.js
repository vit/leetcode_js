
function deleteAndEarn(nums) {

    const nums_weights_map = {};

    for(const num of nums) {
        nums_weights_map[num] = nums_weights_map[num] || 0;
        nums_weights_map[num] += num;
    }

    // for(const num of nums) {
    //     nums_weights_map[num] = num in nums_weights_map
    //         ? nums_weights_map[num] + num
    //         : num;
    // }

    const nums_weights_arr = Object.keys(nums_weights_map)
        // .map(Number)
        .sort( (a, b) => a - b )
        .map( num => ({
            num,
            weight: nums_weights_map[num],
        }) );

    let [prev_max, curr_max] = [0, 0];
    let prev_num = 0;

    for(const { num, weight } of nums_weights_arr) {
        const new_max = (num - prev_num == 1)
            ? Math.max(curr_max, prev_max + weight)
            : curr_max + weight;

        // let new_max;
        // if(num - prev_num == 1) {
        //     new_max = Math.max(curr_max, prev_max + weight);
        // } else {
        //     new_max = curr_max + weight;
        // }


        prev_num = num;
        [prev_max, curr_max] = [curr_max, new_max];
    }

    return curr_max;
}

module.exports = deleteAndEarn;
