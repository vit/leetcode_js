# 740. Delete and Earn | Solution

[status: draft]


## Original formulation of the problem

From leetcode.com:

> You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:
> 
> * Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
> 
> Return the maximum number of points you can earn by applying the above operation some number of times.


## Input data example

```js
num:  3  3  2  2  3  4  4  6
```


## Some intuition (#1)

* When we deside to pick the number 3 (and thereafter delete all 2's and 4's), there are no reasons left not to take all other occurrences of 3.

So we __must__ take the sum of all 3's __or__ do not take 3 at all.

Instead of the original list we can use pairs of unique numbers and sums of all their occurrences (let's call them _weights_).

```js
   num:    2    3    4    6
weight:    4    9    8    6
```

Here we have everything we need to know.


## Second formulation of the problem

* Given the set of pairs (num, weight), find the subset with maximal sum of weights.

Important constraint:

* The distance between any two elements of the required subset can't be equal to 1: |num_i-num_j| <> 1.

__Remark:__ It's clear that without this constraint the required subset would be equal to the whole set. The maximal sum would be a sum of all existing weights (9 + 4 + 8 + 6 = 27).


## More intuition (#2)

Let's make sure that the elements of the set are sorted (in ascending order, for example).

```js
   num:    2    3    4    6
weight:    4    9    8    6
```

It's easier to check the distance between neighbors and tell if they must exclude each other.


## The right question (third formulation of the problem) | Magic begins here

* Given the sequence of pairs, what is the ___maximal possible sum for this whole sequence___ of four elements?

```js
   num:    2    3    4    6
weight:    4    9    8    6
   max:                 max_4=?
```


## Still asking questions...

We don't know yet, __but__ if we knew the ___maximal possible sum for the left subsequence of three elements___ max_3, we could add it with 6 (weight of the fourth element).


```js
max_4 = max_3 + 6
```

But what about max_3?

```js
   num:    2    3    4
weight:    4    9    8
   max:            max_3=?
```

We don't know yet, __but__...


We __can't__ calculate max_3 as


```js
max_3 = max_2 + 8
```

because the numbers 3 and 4 mutually exclude each other.


Here we have two posibilities:

```js
max_3v1 = max_1 + 8     // with number 4, skip 3
max_3v2 = max_2         // with number 3, skip 4
```

Which do we have to use? -- The bigger one.

```js
max_3 = Max(max_1 + 8, max_2)
```


But what about max_2?

```js
   num:    2    3
weight:    4    9
   max:       max_2=?
```

```js
max_2 = Max(9, max_1)
```



But what about max_1?

```js
   num:    2
weight:    4
   max:  max_1=?
```

```js
max_1 = 4
```


## Retracing our steps (right direction of calculations)

```js
max_1 = 4
```

```js
   num:    2
weight:    4
   max:    4
```



```js
max_2 = Max(9, max_1) = Max(9, 4) = 9
```

```js
   num:    2    3
weight:    4    9
   max:    4    9
```






```js
max_3 = Max(max_1 + 8, max_2) = Max(4 + 8, 9) = 12
```

```js
   num:    2    3    4
weight:    4    9    8
   max:    4    9    12
```






```js
max_4 = max_3 + 6 = 12 + 6 == 18
```

```js
   num:    2    3    4    6
weight:    4    9    8    6
   max:    4    9    12   18
```


## The answer

The maximal possible sum for the sequence is __18__.



## The code


```js
function deleteAndEarn(nums) {

    const nums_weights_map = {};

    for(const num of nums) {
        nums_weights_map[num] = nums_weights_map[num] || 0;
        nums_weights_map[num] += num;
    }

    const nums_weights_arr = Object.keys(nums_weights_map)
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

        prev_num = num;
        [prev_max, curr_max] = [curr_max, new_max];
    }

    return curr_max;
}
```



