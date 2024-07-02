import { Injectable } from '@angular/core';
import { Regent } from '../models/regent.model';

@Injectable({
  providedIn: 'root'
})
export class Regent1Service {
  private regent : Regent ;

  constructor() { 
    this.regent = new Regent(
      '10-20-330',
      'Treyes',
      21,
      'Binario',
      '90-2Street'

    );
  }

  getRegent(): Regent {
    return this.regent;
    }
  
   Promise(): string{
    return this.regent.Promise();
   }

}
