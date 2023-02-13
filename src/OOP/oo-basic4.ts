class Address {
    constructor (
        public address: string,
        public readonly zipCode: string,
        public number?: number,
    ) {}

    changeZipCode(newZipCode: string): void {
        // this.zipCode = newZipCode
    }
}

const addressOne = new Address('street x', '75703-005', 187)
console.log(addressOne.zipCode)