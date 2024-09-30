import { DioAccount } from "./DioAccount";

export class AdditionalAccount extends DioAccount {
    
    deposit(value: number): void {
        value = value+10
        super.deposit(value)
        console.log(`${this.getName()} depositou ${value}. Saldo total: ${this.getBalance()}`)
    }
}