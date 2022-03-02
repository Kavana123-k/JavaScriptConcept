var a;
var b = 9;

var a = 7;
b = a;
console.log(b);

var c = 2;
var d = 10;
var e = "This is a";

c = c + 2;
d = d + 5;
e = e + " string";

console.log(c);
console.log(d);
console.log(e);

var carDffhhi;
carDffHHi = 10;
console.log(carDffHHi); //10
console.log(carDffhhi); //undefined

var fiestName = "kavana";
var middleName = "keshav";
var lastName = `gowda`;
console.log(fiestName + " " + middleName + " " + lastName);

var myStr = 'iam "doble quites"';
console.log(myStr);

var myStr = "FirstLine\n\t\\Secondline\nthirdLine";
console.log(myStr);

console.log(fiestName.length);
console.log(fiestName[0]);

fiestName[0] = "h";
console.log(fiestName);

console.log(fiestName[fiestName.length - 1]);
console.log(middleName[middleName.length - 3]);

function wordBlanks(a, b, c) {
  var res = "See";
  res += "the " + a + b + c;
  return res;
}

console.log(wordBlanks("dog", "is", "barking"));

var array = [(["Bulls", 23], ["White fox", 34])];
console.log(array[0][1]);

var array1 = [1, 34, 67];
array1[0] = 23;
console.log(array1);

var array2 = [
  [1, 2, 3],
  [4, 5, 7],
  [8, 9, 10],
  [[11, 12, 13], 14, 15],
];
console.log(array2[3][0] + " " + array2[3][0][1]);

var stringArray = ["Apple", "Banana", "Chikku"];
stringArray.push(["Pineapple", "Mango"]);

console.log(stringArray);

var array3 = [1, 2, 3];
array3.pop();
console.log(array3);

var arr4 = [
  ["apple", 45],
  ["Chikku", 20],
];
arr4.unshift(["mango", 30]);
console.log(arr4);

arr4.shift();
console.log(arr4);

//////////////////
console.log(
  "**********************Global scope*******************************"
);

//global scope

var globalVar = 10;
function fun1() {
  globalfun = 5;
}

function fun2() {
  if (typeof globalVar != undefined) {
    console.log("globalscope", globalVar);
  }
  if (typeof globalfun != undefined) console.log("globalfun", globalfun);
}
fun1();
fun2();

/////////////////
console.log("*************************Local scope****************************");

function locFun() {
  var locvar = 6;
  locglob = 7;
  console.log("locvar:", locvar); //6
  console.log("locvar:", locglob); //7
}
locFun();
console.log(locglob); //7
//console.log(locvar);//locvar not defined

////////////////
console.log("*****************************************************");

function returnValue(num) {
  return num * 5;
}

console.log(returnValue(10));

//////////////////////
console.log(
  "**********************returning undefined value*******************************"
);

var sum = 0;
function addThree() {
  // var sum=sum+3;//nan
  sum = sum + 3;
  //console.log(sum);//3
  return sum; //3
}
function addFive() {
  sum += 5;
  //console.log(sum)//8
  return sum; //8
}
console.log(addThree());
console.log(addFive());

//but it returs values not as shown undefined in vieo

///////////
console.log(
  "**************************assinment withreturn value***************************"
);

var changed;
function change(num) {
  return num + 5;
}
changed = change(10);
console.log(changed);
//////////
console.log(
  "**************************stand in line***************************"
);

function nxtInLin(arr, item) {
  arr.pop();
  arr.push(item);
  arr.shift();
  arr.unshift(7);
  return arr.shift();
}

var testArr = [1, 2, 3, 4];

console.log("Before ", JSON.stringify(testArr));
console.log(nxtInLin(testArr, 6));
console.log("after ", testArr);

console.log(
  "*************************if condition****************************"
);

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "yes,that was true";
  }
  return "No,that was false";
}

console.log(trueOrFalse(true));

//check with equality operator
function testWithEqual(num) {
  //  if(num=12){  //equal
  if ((num = 12)) {
    //not equal
    return "equal";
  }
  return "not equal";
}
console.log(testWithEqual(3));

console.log(
  "****************************Strict equals*************************"
);

function testStrictEqual(num1, num2) {
  if (num1 == 12) {
    console.log("true1"); //true1
  }
  if (num2 == 12) {
    console.log("true2"); //true2
  }
  if (num1 === 12) {
    console.log("true3"); //true3
  }
  if (num2 === 12) {
    console.log("true4"); //false
  }
}
testStrictEqual(12, "12");

console.log("**************************Not euality***************************");

function nonEquality(num) {
  if (num != 3) console.log("true1"); //true
  if (num != "10") {
    console.log("true2"); //false
  }
  if (num !== "10") {
    console.log("true3"); //true
  }
}

nonEquality(10);

console.log(
  "**************************greater euality***************************"
);

if (10 > 10) {
  console.log("greater");
}
if (10 >= 10) {
  console.log("greater then or equal");
}

// if (10 >== 10) { //expression expected
//     console.log("greater then or equal");
//   }

console.log(
  "**************************less then or eqal***************************"
);

if (10 < 10) {
  console.log("lesser");
}
if (10 <= 10) {
  console.log("lesser then or equal");
}

console.log(
  "**************************switch statemet***************************"
);

const switchStatmnt = (num, input) => {
  let answer;
  switch (num) {
    case 1:
      answer = input + 2;
    // break;
    case 2:
      answer = input - 2;
      break;
    case 3:
      answer = input * 2;
      break;
    default:
      answer = input / 2;
  }
  return answer;
};

console.log(switchStatmnt(1, 10)); //8 -->without break (case1,case2)
console.log(switchStatmnt(1, 10)); //5  --> without break
console.log(switchStatmnt(6, 10)); //5 defailt
console.log(switchStatmnt("hi", 10)); //5
console.log(switchStatmnt("1", 10)); //5
console.log(switchStatmnt(1, 10)); //8 (when break is commented in case1)

console.log(
  "**************************multiple switch statemet***************************"
);

const multipleSwitchStatmnt = (input) => {
  let answer;
  switch (input) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 1:
    case 2:
    case 3:
      answer = "medum";
      break;
    case 1:
    case 2:
    case 3:
      answer = "high";
      break;
  }
  return answer;
};

console.log(multipleSwitchStatmnt(1)); //low
