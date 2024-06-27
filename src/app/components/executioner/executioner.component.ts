import { Component, OnInit } from '@angular/core';
import { ExecutionerService } from '../../services/executioner.service';
import { Executioner } from '../../models/executioner.model';

@Component({
  selector: 'app-executioner',
  standalone: true,
  imports: [],
  templateUrl: './executioner.component.html',
  styleUrl: './executioner.component.css'
})
export class ExecutionerComponent implements OnInit {
  executioner! : Executioner;
  hachazo! : string;

  constructor(private executionerService: ExecutionerService) {}

  ngOnInit(): void {
    this.executioner = this.executionerService.getExecutioner();

    this.hachazo = this.executionerService.hachazo();
  }
}
