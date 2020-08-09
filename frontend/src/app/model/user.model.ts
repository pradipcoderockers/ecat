import { Role } from './role.model';

export class User {

    id: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    permission: string;
    photoUrl: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    contactNumber: string;
    emailId: string;
    email: string;
    password1: string;
    password2: string;
    roles: Array<Object> = [];
    


}
