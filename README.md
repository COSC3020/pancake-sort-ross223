[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-m0g1A8z)
# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

The runtime of my implementation of Pancake Sort it $\Theta (n^2)$. This is
because my flip function is made up of some loops and my sorting algorithm is
also made of some loops. Therefore, we can analyze the runtime in terms of loop
logic. 

The flip function has runtime of n as there is a for loop iterating
over the entire array once or twice depending on the index given to the funciton.

The sorting algorithm has a for loop that calls flip twice and has an additional
for loop inside it so it has runtime of n(n + 2n) which results in $\Theta (n^2)$

In terms of number of flips there is 2 flip functions being called in the algorithm
each happening once for every n. There is also an additional flip at the end to 
make the sorted array. Therefore there is 2n + 1 flips or $\Theta (n)$ flips.
