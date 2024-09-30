export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true
    private activeLoan: boolean = false

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

   
    setName = (name: string): void => {
        this.name = name
        console.log('----- Nome alterado -----')
    }

    getName = (): string => {
        return this.name
    }

    getBalance = (): number => {
        return this.balance
    }

    getLoan(loanValue: number) {
        if (this.validateStatus() == true) {
            this.balance = this.balance+loanValue
            this.activeLoan = true
        console.log('Empréstimo concedido com sucesso')
        } else {
            console.log('Emprestimo não concedido')
        }
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