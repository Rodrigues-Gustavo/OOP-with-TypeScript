class Address {
    constructor (
        public address: string,
        public zipCode: string,
        public number?: number,
    ) {}
}

export class User {
    name: string;
    age: number;
    email: string;
    isActive: boolean = false;
    address: Address;

    constructor(name: string, age: number, email: string, isActive: boolean = false, address: Address) {
        this.name = name
        this.age = age
        this.address = address
        this.email = email
        this.isActive = isActive
    }
}
const addressOne = new Address('street x', '75703-005', 187)
const userOne = new User('User 1', 1, 'user@email', true, addressOne)
console.log(userOne.address.zipCode)

const addressTwo = new Address('street x', '75703-005', 188)
const userTwo = new User('User 2', 2, 'user2@email', true, addressTwo)
console.log(userTwo.address.zipCode)