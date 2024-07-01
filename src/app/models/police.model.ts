import { People } from "./people.model";
import { Killer } from "./killer.model";
import { Singer } from "./singer.model";
import { Cook } from "./cook.model";

export class Police extends People{
    
    constructor (
        name: string,
        age : number,
        gender : string,
        address : string,
    ){

        super(name, age, gender, address);
    }

    haveEvidence(): string {
        return `¡¡¡¡¡Esto es veneno!!!!, suelen usarlo italianos, al parecer el pastel fue alterado de fabrica o en el momento que fue entregado`
    }

    needTestimony(): string {
        return `Usted encontro el cuerpo de la victima verdad?, como lo encontro?, Vio algo mas aparte del cuerpo? Conoce a alguien con acento o de nacionalidad italiana?`
    }

    needMoreTestimony(): string {
        return `Señor ${Cook.name} usted fue quien realizo es pastel verdad?, digame que le puso a su pastel para que matara a un hombre`
    }

    needOneMoreTestimony(): string {
        return `Señor ${Killer.name} donde estuvo entre las 10 a 1 am?, usted es italiano cierto ?, muestreme su tobillo porfavor`
    }

    haveMurder(): string {
        return `Usted encaja en la descripcion que me dio la señorita ${Singer.name} ademas que tu cuartada no puede comporbarla nadie, queda bajo arresto veremos que dice el juez`
    }

    Presentation(): string {
        return `Hola soy el detective ${this.name}, su señoria este hombre asesino a sangre fria a un hombre pido que le haga caer todo el peso de la ley`
    }

}