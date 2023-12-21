# 740. Delete and Earn | Solution

## About dynamic programming

The basic idea of the __dynamic programming__ method: to get the optimal __answer__ for the __whole path__, we need to know the optimal answer about a __smaller subpath__ of it.

Our task is to transform the original problem statement into a right question.


## Original problem statement

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


## Intuition #1

* If we decide to take the number 3 (and then remove all 2's and 4's), there is no reason not to take all the other occurrences of the number 3.

So we __must__ take the sum of all 3's or not take 3 at all.

Instead of the original list, we can use pairs of unique numbers and the sums of all their occurrences (let's call them __weights__).

The numbers and weights are all we need to know.
The first -- to check for collisions between them, the second -- to sum them up.

```js
   num:     3     2     4     6
weight:     9     4     8     6
```


## Second problem statement

* Given a set of pairs (num, weight), find the subset with maximum sum of weights.

An important constraint:

* The distance between any two elements of the desired subset cannot be equal to 1: |num_i-num_j| <> 1.

__Note:__ It is clear that without this constraint, the desired subset would be equal to the whole set. The maximum sum would be equal to the sum of all existing weights (4 + 9 + 8 + 6 + 6 = 27).


## Intuition #2

Let's make sure that the elements of the set (sequence) are __ordered__.

```js
   num:     2     3     4     6
weight:     4     9     8     6
```

__Note:__ It is obvious that elements can only conflict __with their immediate neighbors__. If the distance between them is too small.


## Right question (final problem statement)

The right question we need to ask is:

* Given the sequence of pairs (and the above constraint), ___what is the maximum sum of weights for it__?


```js
   num:     2     3     4     6
weight:     4     9     8     6
   max:                     max_4=?
```

And the right answer to this question is:

* __We don't know yet, but__ if we knew the ___maximum sum for the left subsequence of three elements___ (max_3), we could add it with weight_4 (weight of the fourth element).

```js
   num:     2     3     4     6
weight:     4     9     8     6
   max:               max_3 max_4=?
```

```js
max_4 = max_3 + weight_4
```

## Continue with questions

### max_3

__The question:__  What is the maximum sum for a sequence of three elements?

```js
   num:     2     3     4
weight:     4     9     8
   max:   max_1 max_2 max_3=?
```

We __can't__ calculate max_3 as

```js
max_3 = max_2 + weight_3
```

because of the constraint (the numbers 3 and 4 are mutually exclusive). __One of them must be skipped__.

So we have two possibilities:

```js
max_3v1 = max_1 + weight_3  // use number 4, skip 3
max_3v2 = max_2             // use number 3, skip 4
```

Which should we use? -- The larger one.

__The answer:__ We don't know yet, but if we knew the ___maximum sums for the left subsequences of one and two elements___ (max_2 and max_1), we could calculate max_3 using the formula below.

```js
max_3 = Max(max_1 + weight_3, max_2)
```

### max_2

__The question:__  What is the maximum sum for the sequence of two elements?

```js
   num:     2     3
weight:     4     9
   max:   max_1 max_2=?
```
__The answer:__ We don't know yet, but if we knew the ___maximum sum for the left subsequence of one element___ (max_1), we could calculate max_2 using the formula below.

```js
max_2 = Max(weight_2, max_1)
```

### max_1

__The question:__  What is the maximum sum for the sequence of one element?

```js
   num:     2
weight:     4
   max:   max_1=?
```
__The answer:__ Yes, finally we can answer right away! The maximum sum is equal to weight_1.

```js
max_1 = weight_1
```


## Retracing our steps (right direction of calculation)

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

The maximum sum for the whole sequence is __18__.


## Common formula

From the particular solutions above we can derive the next recurrence relation:


```
Have a collision?
    yes:
        new_max = Max(previous_max + weight, max)
    no:
        new_max = max + weight
```

Where the initial values of _max_ and _previous_max_ are equal to 0.


## Code


```js
function deleteAndEarn(nums) {
    // nums = [3, 3, 2, 2, 3, 4, 4, 6]


    // Calculate weights
    const nw_map = {};
    for(const num of nums)
        nw_map[num] = (nw_map[num] || 0) + num;
    // nw_map = { '2': 4, '3': 9, '4': 8, '6': 6 }


    // Make ordered list of pairs
    const nw_sorted = Object.entries(nw_map)
        .sort((a, b) => a[0] - b[0]);
    // nw_sorted = [ [ 2, 4 ], [ 3, 9 ], [ 4, 8 ], [ 6, 6 ] ]


    // We implicitly prepend the sequence
    // with few zero values
    let [prev_max, curr_max] = [0, 0];
    let prev_num = 0;
    // We don't store all previous max's in an array,
    // because we only need two of them.
    // And only one previous num for collision check.

    for(const [num, weight] of nw_sorted) {
        const collision = num - prev_num == 1;

        const new_max = collision // Have a collision?
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





