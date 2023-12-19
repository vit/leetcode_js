# 740. Delete and Earn | Solution

[status: draft]


## About dynamic programming

The main idea of the __Dynamic Programming__ method: in order to get the __optimal__ answer for the __whole path__ we have to know the optimal answer about __a bit lesser subpath__ of it.

Our job is to transform the original problem formulation to the __right question__.


## Original formulation of the problem

From leetcode.com:

> You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:
> 
> * Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
> 
> Return the maximum number of points you can earn by applying the above operation some number of times.


## Example of input data

```js
num:  3  3  2  2  3  4  4  6
```


## Some intuition (#1)

* When we decide to pick the number 3 (and thereafter delete all 2's and 4's), there are no reasons left not to take all other occurrences of 3.

So we __must__ take the sum of all 3's __or__ do not take 3 at all.

Instead of the original list we can use pairs of unique numbers and sums of all their occurrences (let's call them _weights_).

Nums and weights is everything we need to know.
First -- to check collisions between them, second -- to sum them up.

```js
   num:     3     2     4     6
weight:     9     4     8     6
```


## Second formulation of the problem

* Given the set of pairs (num, weight), find the subset with maximal sum of weights.

Important constraint:

* The distance between any two elements of the required subset can't be equal to 1: |num_i-num_j| <> 1.

__Remark:__ It's clear that without this constraint the required subset would be equal to the whole set. The maximal sum would be the sum of all existing weights (4 + 9 + 8 + 6 = 27).


## More intuition (#2)

Let's make sure that the elements of the set (sequence) are __ordered__.

```js
   num:     2     3     4     6
weight:     4     9     8     6
```

__Remark:__ It's obvious that the elements can __only confront with their immediate neighbours__, if the distance between them is too short.


## Right question (final formulation of the problem)

The right question we have to ask is:

* Given the sequence of pairs (and the early mentioned constraint), ___what is the maximal possible sum for this whole sequence___ of four elements?

```js
   num:     2     3     4     6
weight:     4     9     8     6
   max:                     max_4=?
```

And the right answer to this question is:

* __We don't know yet, but__ if we knew the ___maximal possible sum for the left subsequence of three elements___ (max_3), we could add it with weight_4 (weight of the fourth element).

```js
   num:     2     3     4     6
weight:     4     9     8     6
   max:               max_3 max_4=?
```

```js
max_4 = max_3 + weight_4
```

## Continue asking questions

### Seeking max_3

__The question:__  What is the maximal possible sum for the sequence of three elements?

```js
   num:     2     3     4
weight:     4     9     8
   max:   max_1 max_2 max_3=?
```

We __can't__ calculate max_3 as

```js
max_3 = max_2 + weight_3
```

because the numbers 3 and 4 confront (mutually exclude each other). __One of them must be skipped__.

So we have two possibilities:

```js
max_3v1 = max_1 + weight_3  // with number 4, skip 3
max_3v2 = max_2             // with number 3, skip 4
```

Which do we have to use? -- The bigger one.

__The answer:__ We don't know yet, but if we knew the ___maximal possible sums for the left subsequences of one and two elements___ (max_2 and max_1), we could calculate max_3 with the formula below.

```js
max_3 = Max(max_1 + weight_3, max_2)
```

### Seeking max_2

__The question:__  What is the maximal possible sum for the sequence of two elements?

```js
   num:     2     3
weight:     4     9
   max:   max_1 max_2=?
```
__The answer:__ We don't know yet, but if we knew the ___maximal possible sum for the left subsequences of one element___ (max_1), we could calculate max_2 with the formula below.

```js
max_2 = Max(weight_2, max_1)
```

### Seeking max_1

__The question:__  What is the maximal possible sum for the sequence of one element?

```js
   num:     2
weight:     4
   max:   max_1=?
```
__The answer:__ Yes, finally we can answer right away! The maximal possible sum is equal to weight_1.

```js
max_1 = weight_1
```


## Retracing our steps (right direction of calculations)

```js
   num:     2     3     4     6
weight:     4     9     8     6
   max:      ?     ?     ?     ?
```

```js
max_1 =             weight_1                      = 4
max_2 = Max(        weight_2, max_1) = Max(9, 4)  = 9
max_3 = Max(max_1 + weight_3, max_2) = Max(12, 9) = 12
max_4 =     max_3 + weight_4         = 12 + 6     = 18
```

```js
   num:     2     3     4     6
weight:     4     9     8     6
   max:      4     9     12    18
```

## Answer

The maximal possible sum for the whole sequence is __18__.


## Common recurrence relation

```
Have collision?
    yes:
        new_max = Max(earlier_max + weight, max)
    no:
        new_max = max + weight
```


## Code


```js
function deleteAndEarn(nums) {
    // nums = [3, 3, 2, 2, 3, 4, 4, 6]


    // Calculate weights
    const nums_weights_map = {};

    for(const num of nums) {
        nums_weights_map[num] = nums_weights_map[num] || 0;
        nums_weights_map[num] += num;
    }
    // nums_weights_map = { '2': 4, '3': 9, '4': 8, '6': 6 }


    // Make ordered list of pairs
    const nums_weights_arr = Object.keys(nums_weights_map)
        .sort( (a, b) => a - b )
        .map( num => ({
            num,
            weight: nums_weights_map[num],
        }) );
    // nums_weights_arr = [
    //  { num: '2', weight: 4 },
    //  { num: '3', weight: 9 },
    //  { num: '4', weight: 8 },
    //  { num: '6', weight: 6 }
    // ]


    // We implicitly prepend the sequence
    // with few zero values
    let [prev_max, curr_max] = [0, 0];
    let prev_num = 0;
    // We don't use the array to store all previous
    // max's, because we only need two of them.
    // And only one previous num for condition check.

    for(const { num, weight } of nums_weights_arr) {
        const new_max = (num - prev_num == 1) // Have collision?
            ? Math.max(curr_max, prev_max + weight) // Yes
            : curr_max + weight;                    // No

        prev_num = num;
        [prev_max, curr_max] = [curr_max, new_max];
    }
    // curr_max:   0 -> 4 -> 9 -> 12 -> 18
    // prev_max:   0 -> 0 -> 4 -> 9  -> 12


    return curr_max; // 18
}
```





