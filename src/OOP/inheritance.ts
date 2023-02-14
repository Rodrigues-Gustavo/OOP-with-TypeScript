export class User {
    protected name: string;
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

class Manager extends User {
    public getName(): string {
        return `Manager01: ${this.name}`
    }
}

class Admin extends User {
    public getName(): string {
        return `Adm: ${this.name}`
    }
}

const managerOne = new Manager('manager1', 1, 'manager1@email', true)
console.log(managerOne.getName())
