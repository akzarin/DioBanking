export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountBalance: number){
    this.name = name
    this.accountNumber = accountBalance
    }

    deposit(value: number) {
        if (this.validateStatus()) {
            console.log("Voce depositou")
            this.balance = this.balance+value
        }
    }

    withdraw = (withdrawValue: number) => {
        if (this.validateBalance(withdrawValue) == true) {
            this.balance = this.balance-withdrawValue
        console.log("Voce sacou")
        } else {
            console.log('Saldo insuficiente')
        }
    }

    getBalance = () => {
        console.log(this.balance)
    }

    setName = (name: string): void => {
        this.name = name
        console.log('----- Nome alterado -----')
    }

    getName = (): string => {
        return this.name
    }

    private validateStatus = (): boolean => {
        if (this.status == true) {
            return this.status
        }

        throw new Error('Conta invalida')
    }

    private validateBalance = (withdrawValue: number): boolean => {
        if (this.balance >= withdrawValue) {
            return true
        } else {
            return false
        }
    }
}