import { People } from "./people.model";
import { Police } from "./police.model";
import { Killer } from "./killer.model";
import { Executioner } from "./executioner.model";

export class Judge extends People {

constructor (
        name: string,
        age : number,
        gender : string,
        address : string,
){
    super(name, age, gender, address);
}

Veredict() : string{
    return `Basado en las pruebas presentadas por el señor ${Police.name} no tengo mas opcion que condenar al señor ${Killer.name} a la pena maxima la guillotina, ¡Caso Cerrado!`;
}

Execute(): string {
    return `El señor ${Killer.name} ha sido sentenciado a ejecucion porfavor ${Executioner.name} haz lo honores`;
}

}