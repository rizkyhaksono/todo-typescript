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
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
        console.log(doc);
    }
    else {
        doc = new Payment(...values);
        console.log(doc);
    }
    list.render(doc, type.value, "end");
});
// tuples
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
// arr = [30, false, "yoshi"];
console.log(arr);
let tup = ["ryu", 25, true];
// tup[0] = false;
tup[0] = "ken";
console.log(tup);
let student;
//student = [23564, 'chun-li'];
student = ["chun-li", 23564];
console.log(student);
