# Sorting Algorithms

Implementations of 5 common sorting functions: quick sort, merge sort, shell sort (an optimization of insertion sort), selection sort, and bubble sort.

Quick Sort average case: O(n*logn) comparisons, O(n) writes; out-of-place sorting.

Merge Sort average case: O(nlogn) comparisons and writes; out-of-place sorting.

Shell Sort average case: O(n3/2) comparisons, O(n2) writes; in-place sorting.

Selection Sort average case: O(n2) comparisons, O(n) writes; in-place sorting.

Bubble Sort average case: O(n2) comparisons, O(n2) writes; in-place sorting.
For mostly sorted arrays, average case is O(2n) for comparisons & writes.

## Implementation

Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.

Merge sort is a divide and conquer algorithm: Divide the unsorted list into n sublists, each containing 1 element. Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist, which will be sorted.

Shell sort is a comparison sort method that starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements can move some out-of-place elements into position faster than a simple nearest neighbor exchange.

Selection sort is a comparison sort algorithm that divides the input list into two parts: the sublist of items already sorted, which is built at the front of the list, and the sublist of items remaining to be sorted at the back of the list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the boundary one position to the right.

Bubble sort is a comparison sort that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm is named for the way smaller elements "bubble" to the top and larger elements "sink" to the bottom of the list.

###Bubble Sort Implementation
The trick to remembering bubble sort is to visualize that your array is vertical rather than horizontal. If smaller values are "deeper" in the array, they will "rise" to the top until they are the smallest value. If larger values are "higher" in the array, they will sink to the bottom until they are the largest value.

###Your challenge
