// find powers of a number until certain point
// fn(10) -> 3 = 9 // f(10) = 3;
// fn(18) -> 4 = 16

// function findPowers(input) {
//   var squareRootNumber = Math.sqrt(input);
//   var output = Math.floor(squareRootNumber);
//   console.log(output);
// }

// const findPowers = (input) => {
//     let squareRootNumber = Math.sqrt(input);
//     let output = Math.floor(squareRootNumber);
//     console.log(output);
// };

// without using Math and using for loops
const findPowers = (input) => {
  let b = parseInt(input ** 0.5);
  for (i = 1; i * i <= input; i++) {  
    if (b == i) {
      console.log(b);
    }
  }
};

findPowers(25);

