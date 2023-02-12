import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
    constructor(readonly recipient: String, private details: String, public amount: number) {}

    format() {
        return `${this.recipient} is owes $${this.amount} for ${this.details}`;
    }
}
