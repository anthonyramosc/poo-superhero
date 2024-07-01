import { Injectable } from '@angular/core';
import { Executioner } from '../models/executioner.model';

@Injectable({
  providedIn: 'root'
})
export class ExecutionerService {
  private executioner : Executioner;

  constructor() {
    this.executioner = new Executioner(
      'MANUELITO',
      50,
      'Male',
      '34-2Street'
    );
   }

  getExecutioner(): Executioner {
    return this.executioner;
  }

  hachazo(): string {
    return this.executioner.hachazo();
  }
}
