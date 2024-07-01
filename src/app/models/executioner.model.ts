import { People } from "./people.model";

export class Executioner extends People {

constructor (
        name: string,
        age : number,
        gender : string,
        address : string,
){
    super(name, age, gender, address);
}

hachazo() : string {
    return `!Slash! "sonido de cabeza rodando`;
}
}