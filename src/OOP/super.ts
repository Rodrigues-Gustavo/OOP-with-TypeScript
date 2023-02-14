export class User {
    protected name: string;
    private email: string;
    private isActive: boolean = false;

    constructor(name: string, email: string, isActive: boolean = false) {
        this.name = name
        this.email = email
        this.isActive = isActive
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

    public getNumber(): number {
        return 123
    }
}

class Manager extends User {
    constructor(name: string, email: string, isActive: boolean, code: string) {
        console.log(code)
        super(name, email, isActive)
    }

    public getName(): string {
        return `Manager01: ${this.name}`
    }

    public getNumber(): number {
        return super.getNumber() + 10
    }
}

class Admin extends User {
    public getName(): string {
        return `Adm: ${this.name}`
    }

    public getNumber(): number {
        return 80
    }
}

const managerOne = new Manager('Manager01', 'manager@', true, '001')
console.log(managerOne)