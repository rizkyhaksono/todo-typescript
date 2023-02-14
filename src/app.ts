import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form")! as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type")! as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom")! as HTMLInputElement;
const details = document.querySelector("#details")! as HTMLInputElement;
const amount = document.querySelector("#amount")! as HTMLInputElement;

// list template
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
    } else {
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

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};

// const addUID = <T extends { name: string }>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
// };

let docOne = addUID({ name: "yoshi", age: 40 });
let docTwo = addUID({ name: "shaun", age: 30 });

console.log(docOne.age);
console.log(docTwo.name);

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" },
};

const docFour: Resource<object[]> = {
    uid: 1,
    resourceName: "shoppingList",
    // data: ["bread", "milk"],
    data: [
        ["sdsd", "fsadfls"],
        [30, 20],
    ],
};

console.log(docThree, docFour);
