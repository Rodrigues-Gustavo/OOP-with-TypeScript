class User {
    name: string;
    age: number;
    email: string;
    isActive: boolean = false;

    constructor(name: string, age: number, email: string, isActive: boolean = false) {
        this.name = name,
        this.age = age,
        this.email = email,
        this.isActive = isActive
    }
}

const guh = new User('guh', 20, 'guh@dev.com', true)
console.log(guh.name)

export default User

