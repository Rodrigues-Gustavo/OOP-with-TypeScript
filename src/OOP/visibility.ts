export class User {
    private name: string;
    private age: number;
    private email: string;
    private isActive: boolean = false;
    private address: Address[] = [];

    constructor(name: string, age: number, email: string, isActive: boolean = false) {
        this.name = name
        this.age = age
        this.email = email
        this.isActive = isActive
    }

    public addAddress(newAddress: Address): void {
        this.address.push(newAddress)
    }

    public changeName(newName: string): void {
        if (newName.length < 3) {
            throw new Error('invalid name')
        }
        this.name + newName
    }

    public getName(): string {
        return this.name
    }
}

const userOne = new User('user 01', 1, 'user@email', false,)
console.log(userOne.getName())
userOne.changeName('new Name')
console.log(userOne.getName())