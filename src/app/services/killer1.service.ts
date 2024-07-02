import { Injectable } from '@angular/core';
import { Killer } from '../models/killer.model';

@Injectable({
  providedIn: 'root'
})
export class Killer1Service {
  private killer : Killer;

  constructor() {
    this.killer = new Killer(
      'Dust',
      25,
      'Male',
      '25-2Street'
    );
   }
   getKiller() {
    return this.killer;

  }
  testimonyK() : string {
      return this.killer.testimonyK();
      
    }
  
  finalMessage() : string {
      return this.killer.finalMessage();
    }
}
