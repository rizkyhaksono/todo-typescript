import { Invoice } from "./classes/Invoice.js";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// const CustomButton = styled(Button)({
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
// }) as typeof Button;
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("rizky", "work on the natee website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.amount, inv.format());
});
const form = document.querySelector("form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
