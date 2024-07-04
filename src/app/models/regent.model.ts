import { People } from "./people.model";

export class Regent extends People {
    
constructor (
   public dateElected : string,
        name: string,
        age : number,
        gender : string,
        address : string,


){
    super(name, age, gender, address);
    this.dateElected = dateElected;
}

 Promise(): string{
    return `Juro que te vengare hijo mio `
 }
}
