
const PI = 3.14;
let raduis = 3;

let area = raduis * raduis * PI;
console.log(area);

raduis = 20;
area = raduis * raduis * PI;
console.log(area);

raduis = 50;
area = raduis * raduis * PI;
console.log(area);

// Type Coersion
const one = 1;
const two = '2';
                
let result = one * two;
console.log(result);

result = one + two;
console.log(result);

//Scope
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
// console.log(student); //does not work, can't access a block variable outside the block
                    
console.log("Hello World");
