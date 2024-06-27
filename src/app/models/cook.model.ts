import { People } from "./people.model";

export class Cook extends People {
    public  declarationMessage : string;

constructor (
    declarationMessage : string,
        name: string,
        age : number,
        gender : string,
        address : string,
        


){
    super(name, age, gender, address);
    this.declarationMessage = declarationMessage;
}
}