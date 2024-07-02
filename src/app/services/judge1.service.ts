import { Injectable } from '@angular/core';
import { Judge } from '../models/judge.model';

@Injectable({
  providedIn: 'root'
})
export class Judge1Service {
  private judge : Judge;
  constructor() { 
    this.judge = new Judge(
      'Mathisas Agilar',
      60,
      'Female',
      '20-2Street'
    );
  }

  getJudge(): Judge {
    return this.judge;
   }

   Veredict() : string{
    return this.judge.Veredict();
  }

    Execute(): string{
      return this.judge.Execute();
    }
}
