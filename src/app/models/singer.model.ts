import { People } from "./people.model";

export class Singer extends People {
        public talent : string;
    constructor (
        talent : string,
        name : string,
        age : number,
        gender : string,
        address : string,
    ){
        super(name, age, gender, address);
        this.talent = talent;
    }
}