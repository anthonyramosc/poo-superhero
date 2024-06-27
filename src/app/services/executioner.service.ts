import { Injectable } from '@angular/core';
import { Executioner } from '../models/executioner.model';

@Injectable({
  providedIn: 'root'
})
export class ExecutionerService {
  private executioner : Executioner;

  constructor() {
    this.executioner = new Executioner(
      'I`ve a axe and i loved kill',
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
    return '!Slash! "sonido de cabeza rodando"'
  }
}
