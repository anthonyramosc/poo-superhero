import { People } from "./people.model";
import { Singer } from "./singer.model";

export class Cook extends People {
    
    constructor (
            name: string,
            age : number,
            gender : string,
            address : string,
     )   
    {
        super(name, age, gender, address);
    
    }

    declarationMessage() : string{  
        return `I am ${this.name} yo hice el pastel para ${Singer.name} somos amigos asi que le hice el pastel, no le puse nada lo juro era para ella yo jamas la lastimaria porque la amo, alguien mas mancillo mi pastel `
    }

}