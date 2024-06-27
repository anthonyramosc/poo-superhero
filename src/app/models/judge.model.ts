import { People } from "./people.model";

export class Judge extends People {
    public  Autority : string;
    public  Verdict : string;

constructor (
    Autority : string,
        name: string,
        age : number,
        gender : string,
        address : string,
    Verdict : string,
    

){
    super(name, age, gender, address);
    this.Autority = Autority;
    this.Verdict = Verdict
}
}