export class endPoint {
    API: string = "https://crudcrud.com/api/"
    endPoint: string = '/users';
    key: string = "6fe331fc1b0542a3a9568ba1885a04ec"
}
export class User {
    Firstname: string = ""
    Lastname: string = ""
    role: 'Admin' | 'SuperAdmin' | 'User' = 'User'
    email: string = ""
    phoneNo: number = 0
    active: boolean = true;
}
export class Users {
    _id: string | null = null
    Firstname: string = ""
    Lastname: string = ""
    role: 'Admin' | 'SuperAdmin' | 'User' = 'User'
    email: string = ""
    phoneNo: number = 0
    active: boolean = true;
}