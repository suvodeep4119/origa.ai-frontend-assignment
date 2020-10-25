export class FrontendData {
  constructor(
    public id: string,
    public name: string,
    public username: string,
    public email: string,
    public address: Address,
    public phone: number,
    public website: string,
    public company: Company
  ) {}
}

//Defining Address type
export class Address {
  constructor(
    public street: string,
    public suite: string,
    public city: string,
    public zipcode: number,
    public geo: Geo
  ) {}
}

//Defining Geo type
export class Geo {
  constructor(public lat: number, public lng: number) {}
}

//Defining Company type
export class Company {
  constructor(
    public name: string,
    public catchPhrase: string,
    public bs: string
  ) {}
}
