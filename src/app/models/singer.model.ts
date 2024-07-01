import { People } from "./people.model";
import { Killer } from "./killer.model";

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

    findDied(): string{
        return `AHHHHHHHHHHHHHHHHHHHH ayudaaaaaaaaaaa`;
    }

    testimonyS(): string{
        return `I am ${this.name}, si yo lo encontre ahi tirado sin vida, al principio pense que era un borracho pero luego note que nose movia, all acercarme para revisarlo note que estaba muerto y lo uncio que pude ver fue a un hombre con un tatuaje de leon en el tobillo alejarse, grite muy alto y llame a la policia, ehhh si conozco a ${Killer.name} pero el no pudo haber sido cierto?`
    }
}