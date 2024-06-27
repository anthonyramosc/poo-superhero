import { People } from "./people.model";

export class Police extends People{
        public haveArmor : string;
    constructor (
        haveArmor : string,
        name: string,
        age : number,
        gender : string,
        address : string,
    ){

        super(name, age, gender, address);
    this.haveArmor = haveArmor;
    }
}