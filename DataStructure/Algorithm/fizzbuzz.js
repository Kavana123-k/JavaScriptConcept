const input = [1, 3, 5, 8, 12, 15, 18, 25, 30];

//read the input value one by one and compare it with number
//if the number divisible by bith 3 and 5  then 15 is fizz and buzz
//if num divisibl by 3 show 12 is fizz
//if num divi by 5 show 25 is buzz
//if condition is false show 1

function fizzBuzz(input) {
  input.forEach((element) => {
    if (element % 3 == 0 && element % 5 == 0) {
      console.log(element, "is fizz buzz");
    } else if (element % 3 == 0) {
      console.log(element, "is fizz ");
    } else if (element % 5 == 0) {
      console.log(element, "is  buzz");
    } else {
      console.log(element);
    }
  });
}

fizzBuzz(input);
