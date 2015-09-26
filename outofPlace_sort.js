
// ave-case: O(n*logn) comparisons, O(n) writes; out-of-place sorting;
function quickSort(values) {
  var total = 0;
  function sort(list) {
    if (list.length <= 1)
      return list;
    else if (list.length === 2) {
      return list[0] < list[1] ? list : [list[1], list[0]];
    }
    var mid = list[parseInt(list.length / 2)];
    var left = [];
    var right = [];
    list.forEach(function(val) {
      if (val < mid)
        left.push(val);
      else if (val > mid)
        right.push(val);
    });
    total++;
    return sort(left).concat(mid).concat(sort(right));
  }
  return [sort(values), total];   // sort must be BEFORE total since comma evaluate left to right;
}

function mergeSort(vals) {
  var total = 0;
  function divide(values) {
    if (values.length <= 1)
      return values;
    var mid = values.length / 2;
    var left = values.slice(0, mid);
    var right= values.slice(mid);
    return sort(divide(left), divide(right));
  }
  function sort(left, right) {
    var sorted = [];
    left = left ? left : [];
    right = right ? right : [];
    while (left.length || right.length) {   // DO NOT check left[0] or right[0] if length === 0;
      if (left.length && (right.length === 0 || left[0] <= right[0]))
        sorted.push(left.shift());
      else
        sorted.push(right.shift());
      if (left.length && right.length)  // only merging if both arrays have values;
        total++;
    }
    return sorted;
  }
  return [divide(vals), total];   // sort must be BEFORE total since comma evaluate left to right;
}

  // function sort(index) {
  //   if (index === list.length - 1) {
  //     return;
  //   }
  //   if (list[list.length - 1] < list[index]) {
  //     var temp = list[index];
  //     list[index] = list[list.length - 1];
  //     list[list.length - 1] = temp;
  //     total++;
  //     if (list.length === 2)
  //       return;
  //   } // else list[0] is next smallest
  //   sort(index + 1);
  // }
