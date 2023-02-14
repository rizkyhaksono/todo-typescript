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
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// const addUID = <T extends { name: string }>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
// };
let docOne = addUID({ name: "yoshi", age: 40 });
let docTwo = addUID({ name: "shaun", age: 30 });
console.log(docOne.age);
console.log(docTwo.name);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" },
};
const docFour = {
    uid: 1,
    resourceName: "shoppingList",
    data: ["bread", "milk"],
};
console.log(docThree, docFour);
