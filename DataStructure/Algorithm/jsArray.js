// slice, flat

const arr = [1, 2, 3, 4, 5, [10, 20, 30]];
const slice = (start, end) => {
  return arr.slice(start, end);
};
const flat = (arr,depth) => {
  return arr.flat(depth);
};

//slices(2, 4);
console.log(slice(2,4)); // [3,4];
console.log(flat(arr,1)); // [1,2,3,4,5,10,20,30];

const arr1 = [1, 2, [[[4,5,6,7]]]];
console.log(arr1.flat(1));
 console.log(arr1.flat(2));

