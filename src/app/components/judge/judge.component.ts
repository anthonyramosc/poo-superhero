import { Component, OnInit} from '@angular/core';
import { Judge } from '../../models/judge.model';
import { JudgeService } from '../../services/judge.service';

@Component({
  selector: 'app-judge',
  standalone: true,
  imports: [],
  templateUrl: './judge.component.html',
  styleUrl: './judge.component.css'
})
export class JudgeComponent implements OnInit {

  judge! : Judge;
  verdictMessage! : string;
  constructor (private judgeService : JudgeService) {}

  ngOnInit(): void {
    this.judge = this.judgeService.getJudge();

    this.verdictMessage = this.judgeService.verdict();
  }

}
