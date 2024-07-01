import { Injectable } from '@angular/core';
import { Killer } from '../models/killer.model';

@Injectable({
  providedIn: 'root'
})
export class KillerService {
  private killer : Killer

  constructor() {
    this.killer = new Killer(
      'John Doe',
      25,
      'Male',
      '21-2Street'
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
