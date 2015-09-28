
var TEST_SIZE = 102;
var divs = new Array(TEST_SIZE);
var indices = document.getElementById('indices');
indices.style.textAlign = 'center';
for (var i = 0; i < TEST_SIZE; i++) {
  var div = document.createElement('div');
  div.id = 'id' + i;
  div.className = 'cell';
  indices.appendChild(div);
  divs[i] = div;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function makeArray() {
  var random = new Array(TEST_SIZE);
  for (var idx = 0; idx < TEST_SIZE; idx++) {
    var temp = getRandomInt(0, TEST_SIZE);
    while (random.indexOf(temp) >= 0)
      temp = getRandomInt(0, TEST_SIZE);
    random[idx] = temp;
  }
  return random;
}

//  console.log('index = ' + current + ', prev: ' + prev + ', list: ' + list);
function showSwap(prev, list) {
  if (prev.length > 0) {
    divs[prev[0]].classList.remove('moved');
    divs[prev[2]].classList.remove('moved');
  }
  if (list.length > 0) {
    divs[list[0]].textContent = list[1];
    divs[list[2]].textContent = list[3];
    divs[list[0]].classList.add('moved');
    divs[list[2]].classList.add('moved');
  }
}

function runSort(func, outofPlace) {
  var values = makeArray();
  var copy = values.slice(0);
  var sorted = func(values, outofPlace);
  var current = 0;
  var swaps = quicks;
  switch (func) {
    case bubble2Sort : swaps = bubbles; break;
    case selectSort : swaps = selects; break;
    case shellSort : swaps = shells; break;
    case quickSort : swaps = quicks; break;
    case mergeSort : swaps = merges; break;
  }
  console.log('initial: ' + copy);
  var timerId = setInterval(function (changes) {
    var prev = current === 0 ? [] : changes[current - 1];
    var list = current === changes.length ? [] : changes[current];
    showSwap(prev, list);
    if (current === changes.length)
      clearInterval(timerId);
    current++;
  }, 20, swaps);
  for (var i = 0; i < copy.length; i++) {
    divs[i].textContent = copy[i];
  }
  console.log('results: ' + (outofPlace ? sorted : values));
}

function testArray(values) {
  return values.every(function(val, index, list) {
    return index === list.length - 1 || val <= list[index + 1];
  });
}
var sorters = [bubble2Sort, selectSort, shellSort, quickSort, mergeSort];

var bubTest = makeArray();
bubble2Sort(bubTest);
var selTest = makeArray();
selectSort(selTest);
var shellTest = makeArray();
shellSort(shellTest);
var quickTest = quickSort(makeArray(), true);
var mergeTest = mergeSort(makeArray(), true);

// swap arrays are global variables in the _sort.js files;
console.log('bubbles moves = ' + bubbles.length);
console.log('Bubble sort: ' + (testArray(bubTest) ? 'passed' : 'unsorted'));
console.log('selects moves = ' + selects.length);
console.log('Selection sort: ' + (testArray(selTest) ? 'passed' : 'unsorted'));
console.log('shells moves = ' + shells.length);
console.log('Shell sort: ' + (testArray(shellTest) ? 'passed' : 'unsorted'));
console.log('quicks moves = ' + quicks.length);
console.log('Quick sort: ' + (testArray(quickTest) ? 'passed' : 'unsorted'));
console.log('merges moves = ' + merges.length);
console.log('Merged sort: ' + (testArray(mergeTest) ? 'passed' : 'unsorted'));

// runSort(bubble2Sort);
// runSort(selectSort);
// runSort(shellSort);
runSort(quickSort, true);
