export class Address {
    private street: string = '';
    // private zipCode: string = '';
    private _zipCode: string = '';
    private _numberA?: number;
    private static defaultZipCodeValidation = 75000000

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

    public set numberA(numberA: number) {
        this._numberA = numberA
    }

    public get numberA(): number {
        return this._numberA ?? 123
    }

    public static isZipCodeValid(zipCode: string): boolean {
        return parseInt(zipCode.replace(/\D/g, '')) > Address.defaultZipCodeValidation
    }
}

console.log(Address.isZipCodeValid('00000-001'))