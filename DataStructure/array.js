//includes,map,foreach,reduce,filter,some,every,find

let arr = ['a', 'b', 'c','d']

console.log(arr.includes('a', 100)) ;// true
console.log(arr.includes('b', -100)) // true
console.log(arr.includes('c', -100)) // true
console.log(arr.includes('a', -2))  // false
//arr.includes('d', -100)


const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

console.log([1, 2, 3].includes(2))        // true
console.log([1, 2, 3].includes(4))       // false
console.log([1, 2, 3].includes(3, 3) )     // false
console.log([1, 2, 3].includes(3, 2) )     // true
console.log([1, 2, 3].includes(3, -1))     // true
console.log([1, 2, NaN].includes(NaN))   // true
console.log(["1", "2", "3"].includes(3)) //false


const array1 = [1, 4, 9, 16];
// pass a function to map
console.log(array1.map(x => x * 2));//[ 2, 8, 18, 32 ]

console.log(array1.map(x => Math.sqrt(x)));//[ 1, 2, 3, 4 ]


const items = ['item1', 'item2', 'item3'];
const copyItems = [];

items.forEach(t=>console.log(t));
// item1
// item2
// item3

items.forEach((item) => {
  copyItems.push(item);
  
});
console.log(copyItems) //[ 'item1', 'item2', 'item3' ]


const arrayEvery=(t)=>t<10
let array=[1,2,3,4]
console.log(array.every(arrayEvery));//true


let abc=[2,6,14,3,166]

console.log(abc.find(t=>t<10)) //2
console.log(abc.find(t=>t>10)) //14


let f=['apple','banana','chikku','pineapple']

console.log(f.filter(word=>word.length==6));//[ 'banana', 'chikku' ]

console.log(f.some(word=>word.length==6)); 

console.log([12, 5, 8, 130, 44].filter(t=>t>10))//[ 12, 130, 44 ]
console.log([12, 5, 8, 130, 44].some(t=>t>10))//true
console.log([12, 5, 8, 130, 44].some(t=>t<10))//true


const r=[1,2,3,4]

console.log(r.reduce((p,c)=>(p+c)))
console.log(r.reduce((p,c)=>p))

let initialValue = 0

const red=[{a:1},{a:2},{a:3},{a:4}]
console.log(red.reduce((p,c)=>p+c.a,initialValue))

//////////////////////////////////////////////////

let q=[1,2,3,4]
console.log(q.at(2))
////////////////////////////////

let w=[[1],[2,4]]
let e=[3,4]

w[0].push(2);
console.log(w.concat(e))
console.log(w)  
// [ [ 1, 2 ], [ 2, 4 ], 3, 4 ]
// [ [ 1, 2 ], [ 2, 4 ] ]

//////////////

let copyIn=[1,2,3,4,5]
//console.log(copyIn.copyWithin(0,3))
//console.log(copyIn.copyWithin(0,3,3))
console.log(copyIn.copyWithin(1,3))

////////////////////////
var entry = ['a', 'b', 'c'];
var iterator = entry.entries();
console.log(iterator);
for (let e of iterator) {
  console.log(e);
}

////////////////////////
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}


console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))


/////////////
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({name}) => name === 'cherries' );

console.log(result) 
//////////////////////////////

const arr1 = [1, 2, [3, 4]];

// To flat single level array
// is equivalent to
//console.log(arr1.reduce((arr1,val) => arr1.concat(val)))

/////////////////////////////

let arr2 = [1, 2, 3, 4];

console.log(arr2.map(x => x * 2));

console.log(arr2.map(x => [x * 2]));
// [[2], [4], [6], [8]]

console.log(arr2.flatMap(x => [x * 2]));
// [2, 4, 6, 8]

// only one level is flattened
console.log(arr2.flatMap(x => [[x * 2]]));


////////////////////////////////////////

const frm=[1,2,3,4]
//console.log(frm.from(x => x + x));
console.log(frm.map(arr=>arr*2))
console.log(Array.from([1,2,3,4], x => x + x));

///////////////////////////////////////////

// const inventy = [
//   {name: 'apples', type: 'vegetables', quantity: 5},
//   {name: 'bananas',  type: 'fruit', quantity: 0},
//   {name: 'goat', type: 'meat', quantity: 23},
//   {name: 'cherries', type: 'fruit', quantity: 5},
//   {name: 'fish', type: 'meat', quantity: 22}
// ];
// // let res=inventy.groupBy(({type}) => type);
// // console.log(res);

// function myCallback( { quantity } ) {
//   return quantity > 5 ? 'ok' : 'reorder';
// }

// result = inventy.groupBy( myCallback );

//////////////////
const elements = ['Fire', 'Air', 'Water'];
const el=['Air','water','fire']

console.log(elements.join());
console.log(elements.join(', '));
console.log(elements.join(','));
console.log(elements.join(' + '));
console.log(elements.join(""));
console.log(elements.concat(el));

/////////
const array4 = ['one', 'two', 'three'];
console.log('array1:', array4)

/////////////////
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals)
/////////////////////////////////

var worldString = 'Hello, world';
console.log(worldString.blink());  // <blink>Hello, world</blink>
console.log(worldString.bold());  // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike());  // <strike>Hello, world</strike>
 