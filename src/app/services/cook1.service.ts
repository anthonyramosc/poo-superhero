import { Injectable } from '@angular/core';
import { Cook } from '../models/cook.model';

@Injectable({
  providedIn: 'root'
})
export class Cook1Service {
  private cook : Cook;

  constructor() {
    this.cook = new Cook(
    'Alexander Calle',
    31,
    'Male',
    '4-2Street'
    )
   }
   getCook():Cook{
    return this.cook;
  }

  declarationMessage(): string {
    return this.cook.declarationMessage();
  }
}
