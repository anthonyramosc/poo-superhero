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
import { Cook1Service } from '../../services/cook1.service';
import { Regent1Service } from '../../services/regent1.service';
import { Singer1Service } from '../../services/singer1.service';
import { Police1Service } from '../../services/police1.service';
import { Killer1Service } from '../../services/killer1.service';
import { Judge1Service } from '../../services/judge1.service';
import { Executioner1Service } from '../../services/executioner1.service';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';


@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.component.html',
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzListModule,
    NzGridModule
  ],
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

  sections = ['intro', 'beginning','end'];
  currentIndex = 0;

  next() {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  constructor(
    private cookService : CookService, 
    private executionerService : ExecutionerService, 
    private judgeService : JudgeService, 
    private killerService : KillerService, 
    private policeService:PoliceService,
    private regentService:RegentService, 
    private singerService:SingerService,
    private cook1Service : Cook1Service, 
    private executioner1Service : Executioner1Service, 
    private judge1Service : Judge1Service, 
    private killer1Service : Killer1Service, 
    private police1Service:Police1Service,
    private regent1Service:Regent1Service, 
    private singer1Service:Singer1Service
  
  
  
  ) { }
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
  this.cook = this.cook1Service.getCook();
  this.singer = this.singer1Service.getSinger();
  this.judge = this.judge1Service.getJudge();
  this.killer = this.killer1Service.getKiller();
  this.regent = this.regent1Service.getRegent();
  this.police = this.police1Service.getPolice();
  this.haveEvidence = this.police1Service.haveEvidence();
  this.needTestimony = this.police1Service.needTestimony();
  this.needMoreTestimony = this.police1Service.needMoreTestimony();
  this.needOneMoreTestimony = this.police1Service.needOneMoreTestimony();
  this.haveMurder = this.police1Service.haveMurder();
  this.Presentation = this.police1Service.Presentation();
  this.declarationMessage = this.cook1Service.declarationMessage();
  this.hachazo = this.executioner1Service.hachazo();
  this.Veredict = this.judge1Service.Veredict();
  this.Execute = this.judge1Service.Execute();
  this.testimonyK = this.killer1Service.testimonyK();
  this.finalMessage = this.killer1Service.finalMessage();
  this.Promise = this.regent1Service.Promise();
  this.findDied = this.singer1Service.findDied();
  this.testimonyS = this.singer1Service.testimonyS();
  
}

}
