// arrays to store swaps [position1, val1, position2, val2];
var bubbles = [];
var selects = [];
var shells  = [];

// ave-case: O(n2) comparisons, O(n2) writes; in-place sorting; for mostly sorted arrays, ave-case is O(2n) for comparisons & writes;
function bubble2Sort(values) {
  var total = count = backcount = 0;
  if (values.length <= 1) {
    return total;
  }
  values.forEach(function(val, idx, arr) {
    function sort(list, index) {
      if (index === list.length - 1)
        return count;
      else if (list[index + 1] < list[index]) {
        bubbles.push([index, list[index + 1], index + 1, list[index]]);
        var temp = list[index];
        list[index] = list[index + 1];
        list[index + 1] = temp;
        swapped = true;
        count++;
      }
      if (!swapped)
        return sort(list, index + 1);
    }
    function backsort(list, index) {
      if (index === 0)
        return backcount;
      else if (list[index - 1] > list[index]) {
        bubbles.push([index, list[index - 1], index - 1, list[index]]);
        var temp = list[index];
        list[index] = list[index - 1];
        list[index - 1] = temp;
        swapped = true;
        backcount++;
      }
      return backsort(list, index - 1);
    }
    count = backcount = 0;
    var swapped = false;      // if swapped === true, all values were sorted;
    total += sort(arr, idx);
    if (swapped) {
      swapped = false;
      total += backsort(arr, idx);
    }
  });
  return total;
}

// ave-case: O(n2) comparisons, O(n) writes; in-place sorting;
function selectSort(list) {
  function sort(index) {
    if (index === list.length - 1) {
      return;
    }
    var min = list.reduce(function(prev, curr, idx) {   // only compare from index;
      return idx <= index ? list[index] : Math.min(prev, curr);
    });
    var minIndex = list.indexOf(min, index);
    if (minIndex > 0) {
      selects.push([index, list[minIndex], minIndex, list[index]]);
      var temp = list[index];
      list[index] = list[minIndex];
      list[minIndex] = temp;
      total++;
    } // else list[0] is next smallest;
    sort(index + 1);
  }
  var total = 0;
  if (list.length > 1)
    sort(0);
  return total;
}

// ave-case: O(n3/2) comparisons, O(n2) writes; in-place sorting;
function shellSort(list) {    // optimization for insertion sort;
  var total = 0;
  if (list.length <= 1)
    return total;
  function sort(gap, i) {
    if (i < list.length) {
      var temp = list[i];
      for (var j = i; temp < list[j - gap] && j >= gap; j -= gap) {

        shells.push([j, list[j - gap], j - gap, list[i]]);    // NOT list[j]!!!
        list[j] = list[j - gap];      // shift larger values up (j is larger index);
        total++;
      }
      list[j] = temp;   // must be outside of loop in case next gap is not larger;
      sort(gap, i + 1);
    }
  }
  var max = Math.floor(Math.log2(list.length));
  var vals = (new Array(max)).fill(max);
  vals = vals.map(function(num, idx, arr) { return num - idx; });
  vals.forEach(function(num, idx, arr) {
    var gap = Math.pow(2, num) - 1;
    sort(gap, gap);     // gap is both the swapped interval and the starting index;
  });
  return total;
}

//  --------------------------------  POLYFILL FUNCTIONS FOR ES6  -----------------

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
    for (var i = 0; i < length; i++) {
      var value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

if (!Array.prototype.fill) {
  Array.prototype.fill = function(value) {
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    var start = arguments[1];
    var relativeStart = start >> 0;

    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;
    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
    while (k < final) {
      O[k] = value;
      k++;
    }
    return O;
  };
}