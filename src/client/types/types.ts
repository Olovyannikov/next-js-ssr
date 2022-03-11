export interface AddressInterface {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface ContactInterface {
    id: string;
    name: string;
    email: string;
    address: AddressInterface;
}
