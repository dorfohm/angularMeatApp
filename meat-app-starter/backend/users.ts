import e = require("express")

export class User {
    constructor(public email: string, public name: string, private password: string) { }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[key:string]: User} = {
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', '123123'),
    "julia@gmail.com": new User('julia@gmail.com', 'Julia', '123112323')
}