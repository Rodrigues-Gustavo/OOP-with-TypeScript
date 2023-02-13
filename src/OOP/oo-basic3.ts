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
    address: Address[] = [];

    constructor(name: string, age: number, email: string, isActive: boolean = false) {
        this.name = name
        this.age = age
        this.email = email
        this.isActive = isActive
    }

    addAddress(newAddress: Address): void {
        this.address.push(newAddress)
    }

    getAddress(): Address[] {
        return this.address
    }
}

const addressOne = new Address('street x', '75703-005', 187)
const userOne = new User('User 1', 1, 'user@email', true)
console.log(userOne)
userOne.addAddress(addressOne)
userOne.addAddress(addressOne)
userOne.addAddress(addressOne)
console.log(userOne)