import { People } from "./people.model";

export class Cook extends People {
    public  Recipe : string;

constructor (
    Recipe : string,
        name: string,
        age : number,
        gender : string,
        address : string,


){
    super(name, age, gender, address);
    this.Recipe = Recipe;
}
}