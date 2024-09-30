import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor( name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number) => {
        super.deposit(value)
        console.log("A empresa depositou")
    }
}