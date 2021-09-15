export interface Users {
    id?: number;
    name: string;
    username: string;
    password: string;
    admin: boolean;
    // email: string;
    phone: string;
}

export interface Authentication {
    username: string;
    password: string;
}

export interface StorageInfo {
    admin: string;
    token: string;
}