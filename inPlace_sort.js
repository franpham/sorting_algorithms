
// ave-case: O(n2) comparisons, O(n2) writes; in-place sorting; for mostly sorted arrays, ave-case is O(2n) for comparisons & writes;
function bubbleSort(values) {
  var done = false;       // boolean to check if inner sort is done;
  var total = count = backcount = 0;
  values.forEach(function(val, idx, array) {
    function sort(list, index) {
      if (list.length === 0 || index === list.length - 1)
        return count + backsort(list, idx);   // idx == initial index given to sort;
      else if (list[index + 1] < list[index]) {
        var temp = list[index];
        list[index] = list[index + 1];
        list[index + 1] = temp;
        count++;
      }
      return done ? count : sort(list, index + 1);
    }
    function backsort(list, index) {
      if (list.length === 0 || index === 0)
        return backcount;
      else if (list[index - 1] > list[index]) {
        var temp = list[index];
        list[index] = list[index - 1];
        list[index - 1] = temp;
        backcount++;
      }
      else
        done = true;    // adjacent neighbors are sorted, so can stop outer sort;
      return backsort(list, index - 1);
    }
    count = backcount = 0;
    total += sort(array, idx);
    // total += backsort(array, idx);
    // call backsort here (same count results) if sort && backsort were not inner functions;
  });
  return total;
}

// ave-case: O(n2) comparisons, O(n) writes; in-place sorting;
function selectSort(list, isprint) {
  var total = 0;
  function sort(index) {
    if (index === list.length - 1) {
      return;
    }
    var min = list.reduce(function(prev, curr, idx) {   // only compare from idx;
      return idx <= index ? list[index] : Math.min(prev, curr);
    });
    var minIndex = list.indexOf(min, index);
    if (minIndex > 0) {
      var temp = list[index];
      list[index] = list[minIndex];
      list[minIndex] = temp;
      total++;
    } // else list[0] is next smallest;
    sort(index + 1);
  }
  if (list.length > 1)
    sort(0);
  return total;
}

// ave-case: O(n3/2) comparisons, O(n2) writes; in-place sorting;
function shellSort(list) {    // optimization for insertion sort;
  var total = 0;
  var start = Math.floor(Math.log2(list.length));

  function sort(exp) {
    var gap = Math.pow(2, exp) - 1;
    for (var i = gap; i < list.length; i++) {
      var temp = list[i];      // shift larger values up;
      for (var j = i; j >= gap && temp < list[j - gap]; j -= gap) {
        // console.log('j = ' + j + ', exp = ' + exp);

        list[j] = list[j - gap];
        total++;
      }
      list[j] = temp;
    }
    if (exp > 1)
      sort(exp - 1);
  }
  if (list.length > 1)
    sort(start);
  return total;
}

Math.log2 = Math.log2 || function(x) {
  return Math.log(x) / Math.LN2;
};

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;
    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}