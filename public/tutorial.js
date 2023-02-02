"use strict";
//// it compile to js file in public folder
// const character = "mario";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// inputs.forEach((input) => {
//     console.log(input);
// });
// // objects in typescript
// let ninja = {
//     name: "mario",
//     belt: "black",
//     age: 30,
// };
// ninja.name = "rizky";
//// explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// character = "rizky";
// age = 20;
// isLoggedIn = true;
// console.log(character, age, isLoggedIn);
//// arrays
// let ninjas: string[] = [];
// function
// let salam: Function;
// salam = () => {
//     console.log("Assalamualaikum");
// };
// const tambah = (a: number, b: number) => {
//     console.log("Hasilnya adalah " + (a + b));
// };
// tambah(5, 10);
// it error because the return type is void
// const minus = (a: number, b: number): void => {
//     return a - b;
// };
// const minus = (a: number, b: number): number => {
//     return a - b;
// };
// let result = minus(10, 7);
// console.log(result);
//// type alias
// type StringOrNum = string | number;
// type objWithName = { name: string; uid: StringOrNum };
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// };
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// };
// greet("rizky", "hello");
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === "add") {
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo;
//     }
// };
// console.log(calc(5, 10, "add"));
