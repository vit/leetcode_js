
function deleteAndEarn(nums) {
    const ns = {};

    console.log("nums = ", nums)

    // for(const n of [0, ...nums])
    //     ns[n] = n in ns ? ns[n] + 1 : 1;

    for(const n of nums)
        ns[n] = n in ns ? ns[n] + 1 : 1;


    console.log("ns = ", ns)

    // const na = Object.entries(ns)
    //     .map( ([n, cnt]) => ({n, price: n*cnt}) )
    //     .sort( (a, b) => a.n - b.n )

    const na = [
        {n: '0', price: 0, sum: 0, max_sum: 0},
        {n: '0', price: 0, sum: 0, max_sum: 0}
    ].concat(Object.entries(ns)
        .map( ([n, cnt]) => ({n, price: n*cnt}) )
       .sort( (a, b) => a.n - b.n )
    )

    console.log("na = ", na)

    for(let i=2; i < na.length; i++) {
        const base_index = 
            na[i].n - na[i-1].n == 1 ?
            i-2 :
            i-1
        na[i].sum = na[base_index].max_sum + na[i].price
        na[i].max_sum = Math.max(na[i-1].max_sum, na[i].sum)
    }

    console.log("na = ", na)

    return na[na.length-1].max_sum

}

module.exports = deleteAndEarn;
