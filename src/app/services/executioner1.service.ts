import { Injectable } from '@angular/core';
import { Executioner } from '../models/executioner.model';

@Injectable({
  providedIn: 'root'
})
export class Executioner1Service {
  private executioner : Executioner;

  constructor() { 
    this.executioner = new Executioner(
      'Ticoquito',
      40,
      'Male',
      '31-2Street'
    );
  }

  getExcutioner(): Executioner {
    return this.executioner;
  }

  hachazo(): string {
    return this.executioner.hachazo();
  }
}
