//object.keys,object.entries,object.values
const fruit={
    a:'apple',
    b:'banana',
    c:'chikku'
}

console.log(Object.keys(fruit)); //[ 'a', 'b', 'c' ]
console.log(Object.values(fruit));//[ 'apple', 'banana', 'chikku' ]
console.log((fruit.a));//apple
console.log(Object.keys(fruit.a)) //[ '0', '1', '2', '3', '4' ]
console.log(Object.values(fruit.a));//[ 'a', 'p', 'p', 'l', 'e' ]


const obj=['a','b','c']
console.log(Object.keys(obj));//[ '0', '1', '2' ]
console.log(Object.values(obj))//[ 'a', 'b', 'c' ]

const alphabet={200:'a',100:'b',300:'c'}
console.log(Object.keys(alphabet))//[ '100', '200', '300' ]

for(let [a,b] of Object.entries(fruit)) //for in loop
{
    console.log(`${a}:${b}`);//a:apple
                               // b:banana
                                // c:chikku
    
}

console.log(Object.entries(alphabet));//[ [ '100', 'b' ], [ '200', 'a' ], [ '300', 'c' ] ]

const o=[1,2,3];
console.log(Object.values(o)) 