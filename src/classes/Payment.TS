import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
    constructor(readonly recipient: String, private details: String, public amount: number) {}

    format() {
        return `${this.recipient} is owes $${this.amount} for ${this.details}`;
    }
}
