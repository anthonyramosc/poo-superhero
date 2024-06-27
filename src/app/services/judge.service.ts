import { Injectable } from '@angular/core';
import { Judge } from '../models/judge.model';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {
  private judge : Judge;

  constructor() {
    this.judge = new Judge(
      'Mas alta',
      'Damian Olivo',
      59,
      'Male',
      '40-2Street',
      'Culpable'
    );
   }

   getJudge(): Judge {
    return this.judge;
   }

   verdict() : string{
    return 'Culpable';
   }
}
