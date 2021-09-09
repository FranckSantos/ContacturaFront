export interface User {
    id?: number;
    name: string;
    password: string;
    email: string;
    admin: boolean;
}

export interface Authentication {
    username: string;
    password: string;
}