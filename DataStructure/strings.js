const string1 = "A string primitive";
const string2 = 'ALSO a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String("A String object");

console.log(string2+" "+string1);

let s='cat';
console.log(s.charAt(1));

let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

console.log(string1.toUpperCase()+" "+string2.toLowerCase())

let str="A String"
let obj=new String("A String")
console.log(typeof(str)+" "+str)
console.log(typeof(obj));
console.log(obj)
console.log(obj.valueOf());
console.log(obj.toString())

let s1 = '2 + 2'              // creates a string primitive
let s2 = new String('2 + 2')  // creates a String object
console.log(eval(s1))
console.log(s1)       
console.log(eval(s2))  
console.log(s2)
console.log(eval(s2.valueOf()))

const filePath = String.raw`A string`;
console.log(filePath)

console.log(`${string1}`)
console.log(`${string1.length}`)

const string5="A string primitive THE String keyword";

const regex=/[A-I]/gi;
const reg_x=/[A-I]/g;

console.log(string5.search("prim"));
console.log(string5.replace("str","sw"))
console.log(string5.replaceAll("str","sw"))
console.log(string5.match(regex))
console.log(string5.match(reg_x))
console.log(string5.repeat(5))

const r=string5.split(" ");
const t=string5.split("");
const y=string5.split();

console.log(r[3]);
console.log(t[5]);
console.log(y); 

console.log(string5.slice(2,3))
console.log(string5.substring(2,3))

console.log(string5.slice(5,3))
console.log(string5.substring(5,3))

console.log(string5.slice(-5,3))
console.log(string5.substring(-5,3))

console.log(string5.indexOf("string"))
console.log(string5.lastIndexOf("THE"))


const k=" the gfhg fhjh "
console.log(k.trimEnd());
console.log(k.trim());
console.log(k.trimStart());

console.log('alphabet'.toUpperCase());
console.log('AlphaBet'.toLowerCase());

