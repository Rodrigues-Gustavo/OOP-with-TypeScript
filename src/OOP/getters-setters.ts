export class Address {
    private street: string = '';
    // private zipCode: string = '';
    private _zipCode: string = '';
    private number?: number;

    public setAddress(address: string): void {
        address.length < 3 ? 'invalid address' : 'address ok';
        this.street = address
    }

    public getAddress(): string {
        return this.street
    }

    // public setZipCode(zipCode: string): void {
    //     this.zipCode = zipCode
    // }

    public set zipCode(zipCode: string) {
        this._zipCode = zipCode
    }

    // public getZipCode(): string {
    //     return this.zipCode.replace(/\D/g, '')
    // }

    public get zipCode(): string {
        return this._zipCode.replace(/\D/g, '')
    }
}

// const address1 = new Address()
// console.log(address1.getAddress())
// address1.setAddress('Main street')
// console.log(address1.getAddress())

// const address1 = new Address()
// console.log(address1.getZipCode())
// address1.setZipCode('00000-01')
// console.log(address1.getZipCode())

const address1 = new Address()
address1.zipCode = '00000-001'
console.log(address1.zipCode)