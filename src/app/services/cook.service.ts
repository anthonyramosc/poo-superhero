import { Injectable } from '@angular/core';
import { Cook } from '../models/cook.model';

@Injectable({
  providedIn: 'root'
})
export class CookService {
      private cook : Cook;
      
  constructor() {
      this.cook = new Cook(
        'Pastel de franbuesa',
        'Alex Calle',
        32,
        'Male',
        '3-2Street'
      )
   }

   getCook(): Cook{
    return this.cook
   }

   declarationMessage(): string {
    return 'Realice un pastel hermoso pero lo deje aqui durante una hora';
   }
}
