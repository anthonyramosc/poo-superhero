import { Injectable } from '@angular/core';
import { Judge } from '../models/judge.model';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {
  private judge : Judge;

  constructor() {
    this.judge = new Judge(
      'Damian Olivo',
      59,
      'Male',
      '40-2Street'
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
