import { People } from "./people.model";

export class Regent extends People {
    public dateElected : string;

constructor (
    dateElected : string,
        name: string,
        age : number,
        gender : string,
        address : string,


){
    super(name, age, gender, address);
    this.dateElected = dateElected;
}
}
