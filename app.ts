import { PeopleAccount } from "./class/PeopleAccount";

const novaPessoa: PeopleAccount = new PeopleAccount(12, 'Ana', 12)
novaPessoa.deposit(12)
novaPessoa.deposit(10)
console.log(novaPessoa.balance)
novaPessoa.withdraw(21)
console.log(novaPessoa.balance)