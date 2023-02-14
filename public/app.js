import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
    }
    list.render(doc, type.value, "end");
});
// generics
// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
// };
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
// };
// const addUID = <T extends { name: string }>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
// };
// let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID({ name: "shaun", age: 30 });
// console.log(docOne.age);
// console.log(docTwo.name);
// with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: "person",
//     data: { name: "shaun" },
// };
// const docFour: Resource<object[]> = {
//     uid: 1,
//     resourceName: "shoppingList",
// data: ["bread", "milk"],
//     data: [
//         ["sdsd", "fsadfls"],
//         [30, 20],
//     ],
// };
// console.log(docThree, docFour);
// enums
// enum GenreMusik {
//     POP,
//     Phonk,
//     HipHop,
//     KPop,
//     Jpop,
//     DreamPop,
// }
// interface Resource<T> {
//     uid: number;
//     resourceType: GenreMusik;
//     data: T;
// }
// const musikSatu: Resource<object> = {
//     uid: 1,
//     resourceType: GenreMusik.DreamPop,
//     data: { title: "The Marias - Over The Moon" },
// };
// const musikDua: Resource<object> = {
//     uid: 2,
//     resourceType: GenreMusik.HipHop,
//     data: { title: "Metro Booming - Too Many Nights" },
// };
// console.log(musikSatu);
// console.log(musikDua);
