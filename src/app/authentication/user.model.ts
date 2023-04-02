export class User {
    constructor (
        public id: string,

        public firstName: string, 
        public middleName: string, 
        public lastName: string, 
        public birthDate: any, 
        public contactNumber: number,

        public barangay: string,
        public street: string,
        public houseNo: number,

        public userName: string,
        public email: string,
    ) {}
}