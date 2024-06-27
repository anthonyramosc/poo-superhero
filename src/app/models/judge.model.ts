import { People } from "./people.model";

export class Judge extends People {
    public  Autority : string;

constructor (
    Autority : string,
        name: string,
        age : number,
        gender : string,
        address : string,


){
    super(name, age, gender, address);
    this.Autority = Autority;
}
}