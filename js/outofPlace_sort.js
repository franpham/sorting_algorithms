// arrays to store swaps [position1, val1, position2, val2];
var quicks = [];
var merges = [];

// ave-case: O(n*logn) comparisons, O(n) writes; out-of-place sorting;
function quickSort(values, listOnly) {
  var total = 0;
  function sort(list) {
    if (list.length <= 1)
      return list;
    else if (list.length === 2) {
      if (list[1] < list[0])
        quicks.push(0, list[0], 1, list[1]);
      return list[0] < list[1] ? list : [list[1], list[0]];
    }
    var mid = list[parseInt(list.length / 2)];
    var left = [];
    var right = [];
    list.forEach(function(val, idx, arr) {
      if (val < mid) {
        quicks.push([left.length, val, idx, arr[left.length]]);
        left.push(val);
      }
      else if (val > mid) {
        quicks.push([right.length + mid, val, idx, arr[right.length + mid]]);
        right.push(val);
      }
    });
    total++;
    return sort(left).concat(mid).concat(sort(right));
  }
  return listOnly ? sort(values) : [sort(values), total];
} // sort must be BEFORE total since comma evaluate left to right;

// ave-case: O(nlogn) comparisons and writes; out-of-place sorting;
function mergeSort(vals, listOnly) {
  // positions keep track of the original positions of vals with value : index pairs;
  // NOTE: searching for positions will not work for arrays with duplicates;
  var total = 0;
  var positions = {};
  vals.forEach(function(val, idx, arr) {
    positions[val] = idx;
  });
  function divide(values) {
    if (values.length <= 1)
      return values;
    var mid = values.length / 2;
    var left = values.slice(0, mid);
    var right= values.slice(mid);
    return sort(divide(left), divide(right), mid);
  }
  function sort(left, right, mid) {
    var sorted = [];
    left = left ? left : [];
    right = right ? right : [];
    while (left.length || right.length) {   // DO NOT check left[0] or right[0] if length === 0;
      if (left.length && (right.length === 0 || left[0] <= right[0])) {
        merges.push([sorted.length, left[0], positions[left[0]], vals[sorted.length]]);
        sorted.push(left.shift());
      }
      else {
        merges.push([sorted.length + mid, right[0], positions[right[0]], vals[sorted.length] + mid]);
        sorted.push(right.shift());
      }
      if (left.length && right.length)  // only merging if both arrays have values;
        total++;
    }
    return sorted;
  }
  return listOnly ? divide(vals) : [divide(vals), total];
} // divide must be BEFORE total since comma evaluate left to right;
