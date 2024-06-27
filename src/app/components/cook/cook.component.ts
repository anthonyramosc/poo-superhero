import { Component, OnInit } from '@angular/core';
import { Cook } from '../../models/cook.model';
import { CookService } from '../../services/cook.service';

@Component({
  selector: 'app-cook',
  standalone: true,
  imports: [],
  templateUrl: './cook.component.html',
  styleUrl: './cook.component.css'
})
export class CookComponent implements OnInit {

cook!: Cook;
declarationMessage! : string;
constructor (private cookService : CookService) {}

ngOnInit(): void {
  this.cook = this.cookService.getCook();

  this.declarationMessage = this.cookService.declarationMessage();
}

}
