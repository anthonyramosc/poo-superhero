import { People } from "./people.model";

export class Killer extends People {
    public isSilence : string;    

constructor (
    isSilence : string,
        name: string,
        age : number,
        gender : string,
        address : string,


){
    super(name, age, gender, address);
    this.isSilence = isSilence;
}
}