import { People } from "./people.model";

export class Killer extends People {   

constructor (
        name: string,
        age : number,
        gender : string,
        address : string,
){
    super(name, age, gender, address);
}

testimonyK() : string {
    return `Estuve en mi casa solo y descansando, la verdad nose que tengo que ver aqui, si yo soy italiano, *Muestra su tobillo*`
}

finalMessage() : string {
    return `No me importa que me maten, yo volvere y jamas lo dejare en paz, ¡¡¡¡¡RECUERDENME!!!!!`
}

}

export class KillerAlter extends People {

    finalMessage() : string {
        return `!!!!!!!!PAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡`
    }
}