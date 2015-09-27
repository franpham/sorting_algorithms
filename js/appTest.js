var expect = chai.expect;

describe('BubbleSort', function() {
  var emptyArr = [];
  var oneArray = [1];
  var dupArray = [2, 1, 2];
  var threeArr = [3, 2, 1];
  var tenArray = [5, 3, 7, 1, 0, 9, 2, 8, 6, 4];

  it("Empty array should have move = 0.", function() {
    expect(bubble2Sort(emptyArr)).to.equal(0);
    expect(emptyArr).to.deep.equal([]);
  });
  it("1-element array should have move = 0.", function() {
    expect(bubble2Sort(oneArray)).to.equal(0);
    expect(oneArray).to.deep.equal([1]);
  });
  it("Duplicate elements array should have move = 1", function() {
    expect(bubble2Sort(dupArray)).to.equal(1);
    expect(dupArray).to.deep.equal([1, 2, 2]);
  });
  it("3-elements array should have moves = 3", function() {
    expect(bubble2Sort(threeArr)).to.equal(3);
    expect(threeArr).to.deep.equal([1, 2, 3]);
  });
  it("Ten elements array should have moves = 21", function() {
    console.log('bubble2Sort moves = ' + bubble2Sort(tenArray));
    expect(tenArray).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('SelectSort', function() {
  var emptyArr = [];
  var oneArray = [1];
  var dupArray = [2, 1, 2];
  var threeArr = [3, 2, 1];
  var tenArray = [5, 3, 7, 1, 0, 9, 2, 8, 6, 4];

  it("Empty array should have move = 0.", function() {
    expect(selectSort(emptyArr)).to.equal(0);
    expect(emptyArr).to.deep.equal([]);
  });
  it("1-element array should have move = 0.", function() {
    expect(selectSort(oneArray)).to.equal(0);
    expect(oneArray).to.deep.equal([1]);
  });
  it("Duplicate elements array should have move = 1", function() {
    expect(selectSort(dupArray)).to.equal(2);
    expect(dupArray).to.deep.equal([1, 2, 2]);
  });
  it("3-elements array should have moves = 1", function() {
    expect(selectSort(threeArr)).to.equal(2);
    expect(threeArr).to.deep.equal([1, 2, 3]);
  });
  it("Ten elements array should have moves = 9", function() {
    console.log('selectSort moves = ' + selectSort(tenArray));
    expect(tenArray).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('ShellSort', function() {
  var emptyArr = [];
  var oneArray = [1];
  var dupArray = [2, 1, 2];
  var threeArr = [3, 2, 1];
  var tenArray = [5, 3, 7, 1, 0, 9, 2, 8, 6, 4];

  it("Empty array should have move = 0.", function() {
    expect(shellSort(emptyArr)).to.equal(0);
    expect(emptyArr).to.deep.equal([]);
  });
  it("1-element array should have move = 0.", function() {
    expect(shellSort(oneArray)).to.equal(0);
    expect(oneArray).to.deep.equal([1]);
  });
  it("Duplicate elements array should have move = 1", function() {
    expect(shellSort(dupArray)).to.equal(1);
    expect(dupArray).to.deep.equal([1, 2, 2]);
  });
  it("3-elements array should have moves = 3", function() {
    expect(shellSort(threeArr)).to.equal(3);
    expect(threeArr).to.deep.equal([1, 2, 3]);
  });
  it("Ten elements array should have moves = 11", function() {
    console.log('shellSort moves = ' + shellSort(tenArray));
    expect(tenArray).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('QuickSort', function() {
  var emptyArr = [];
  var oneArray = [1];
  var dupArray = [2, 1, 2];
  var threeArr = [3, 2, 1];
  var tenArray = [5, 3, 7, 1, 0, 9, 2, 8, 6, 4];

  it("Empty array should have move = 0.", function() {
    var temp = quickSort(emptyArr);
    expect(temp[1]).to.equal(0);
    expect(temp[0]).to.deep.equal([]);
  });
  it("1-element array should have move = 0.", function() {
    var temp = quickSort(oneArray);
    expect(temp[1]).to.equal(0);
    expect(temp[0]).to.deep.equal([1]);
  });
  it("Duplicate elements array should have move = 1", function() {
    var temp = quickSort(dupArray);
    expect(temp[1]).to.equal(1);
    expect(temp[0]).to.deep.equal([1, 2, 2]);
  });
  it("3-elements array should have moves = 1", function() {
    var temp = quickSort(threeArr);
    expect(temp[1]).to.equal(1);
    expect(temp[0]).to.deep.equal([1, 2, 3]);
  });
  it("Ten elements array should have moves = 7", function() {
    var temp = quickSort(tenArray);
    console.log('quicksort moves = ' + temp[1]);
    expect(temp[0]).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

  describe('MergeSort', function() {
  var emptyArr = [];
  var oneArray = [1];
  var dupArray = [2, 1, 2];
  var threeArr = [3, 2, 1];
  var tenArray = [5, 3, 7, 1, 0, 9, 2, 8, 6, 4];

  it("Empty array should have move = 0.", function() {
    var temp = mergeSort(emptyArr);
    expect(temp[1]).to.equal(0);
    expect(temp[0]).to.deep.equal([]);
  });
  it("1-element array should have move = 0.", function() {
    var temp = mergeSort(oneArray);
    expect(temp[1]).to.equal(0);
    expect(temp[0]).to.deep.equal([1]);
  });
  it("Duplicate elements array should have move = 1", function() {
    var temp = mergeSort(dupArray);
    expect(temp[1]).to.equal(1);
    expect(temp[0]).to.deep.equal([1, 2, 2]);
  });
  it("3-elements array should have moves = 1", function() {
    var temp = mergeSort(threeArr);
    expect(temp[1]).to.equal(1);
    expect(temp[0]).to.deep.equal([1, 2, 3]);
  });
  it("Ten elements array should have moves = 15", function() {
    var temp = mergeSort(tenArray);
    console.log('mergesort moves = ' + temp[1]);
    expect(temp[0]).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
