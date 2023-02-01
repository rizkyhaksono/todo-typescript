"use strict";
const form = document.querySelector("form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
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
// explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// character = "rizky";
// age = 20;
// isLoggedIn = true;
// console.log(character, age, isLoggedIn);
// arrays
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
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
