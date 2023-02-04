class Invoice {
    client: String;
    details: String;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("rizky", "work on the natee website", 300);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
    console.log(inv.format());
});

// console.log(invoices);

const form = document.querySelector("form")! as HTMLFormElement;

const type = document.querySelector("#type")! as HTMLSelectElement;

const tofrom = document.querySelector("#tofrom")! as HTMLInputElement;

const details = document.querySelector("#details")! as HTMLInputElement;

const amount = document.querySelector("#amount")! as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
