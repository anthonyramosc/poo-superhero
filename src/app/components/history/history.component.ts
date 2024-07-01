import { Component, OnInit } from '@angular/core';
import { Cook } from '../../models/cook.model';
import { Singer } from '../../models/singer.model';
import { Judge } from '../../models/judge.model';
import { Killer } from '../../models/killer.model';
import { Executioner } from '../../models/executioner.model';
import { Regent } from '../../models/regent.model';
import { Police } from '../../models/police.model';
import { CookService } from '../../services/cook.service';
import { ExecutionerService } from '../../services/executioner.service';
import { JudgeService } from '../../services/judge.service';
import { KillerService } from '../../services/killer.service';
import { PoliceService } from '../../services/police.service';
import { RegentService } from '../../services/regent.service';
import { SingerService } from '../../services/singer.service';

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  cook!: Cook;
  singer!: Singer;
  judge!: Judge;
  killer!: Killer;
  executioner!: Executioner;
  regent!: Regent;
  police!: Police;
  haveEvidence! : string;
  needTestimony! : string;
  needMoreTestimony!: string;
  needOneMoreTestimony!: string;
  haveMurder!: string;
  Presentation!: string;
  declarationMessage! : string;
  hachazo! : string;
  Veredict! : string;
  Execute!: string;
  testimonyK!: string;
  finalMessage! : string;
  Promise!: string;
  findDied!: string;
  testimonyS!: string;

  constructor(private cookService : CookService, private executionerService : ExecutionerService, private judgeService : JudgeService, private killerService : KillerService, private policeService:PoliceService,private regentService:RegentService, private singerService:SingerService) { }
ngOnInit(): void {
  this.cook = this.cookService.getCook();
  this.singer = this.singerService.getSinger();
  this.judge = this.judgeService.getJudge();
  this.killer = this.killerService.getKiller();
  this.executioner = this.executionerService.getExecutioner();
  this.regent = this.regentService.getRegent();
  this.police = this.policeService.getPolice();
  this.haveEvidence = this.policeService.haveEvidence();
  this.needTestimony = this.policeService.needTestimony();
  this.needMoreTestimony = this.policeService.needMoreTestimony();
  this.needOneMoreTestimony = this.policeService.needOneMoreTestimony();
  this.haveMurder = this.policeService.haveMurder();
  this.Presentation = this.policeService.Presentation();
  this.declarationMessage = this.cookService.declarationMessage();
  this.hachazo = this.executionerService.hachazo();
  this.Veredict = this.judgeService.Veredict();
  this.Execute = this.judgeService.Execute();
  this.testimonyK = this.killerService.testimonyK();
  this.finalMessage = this.killerService.finalMessage();
  this.Promise = this.regentService.Promise();
  this.findDied = this.singerService.findDied();
  this.testimonyS = this.singerService.testimonyS();
  
}

}
