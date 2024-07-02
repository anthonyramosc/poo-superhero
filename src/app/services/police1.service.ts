import { Injectable } from '@angular/core';
import { Police } from '../models/police.model';

@Injectable({
  providedIn: 'root'
})
export class Police1Service {
private police : Police;

  constructor() {
    this.police = new Police(
    'Correa',
    45,
    'Male',
    '39-2Street'
  ); 
}

getPolice(): Police {
  return this.police
}

haveEvidence(): string {
  return this.police.haveEvidence();
}

needTestimony(): string {
  return this.police.needTestimony();
}

needMoreTestimony(): string {
  return this.police.needMoreTestimony();
}

needOneMoreTestimony(): string {
  return this.police.needOneMoreTestimony();
}

haveMurder(): string {
  return this.police.haveMurder();
}

Presentation(): string {
  return this.police.Presentation();
}
}
