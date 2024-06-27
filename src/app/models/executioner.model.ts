import { People } from "./people.model";

export class Executioner extends People {
    public  hachazo : string;

constructor (
    hachazo : string,
        name: string,
        age : number,
        gender : string,
        address : string,


){
    super(name, age, gender, address);
    this.hachazo = hachazo;
}
}