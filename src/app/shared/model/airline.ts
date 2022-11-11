

export interface Ichildren {
    name : string;
    age : number;
}

export interface Ipassenger {
    id : number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: null | number;
    children: Ichildren[] | null;
}