import {Document  } from "mongoose";

interface Address {
    addr1: string;
    addr2: string;
    city: string;
    country: string;
    zip: number;
}

export interface User extends Document {
    name: string;
    password: string;
    address: Address;
    created: Date;
}