import { Component, OnInit } from '@angular/core';
import { Observable, interval } from "rxjs";

import { Indicator } from '../indicator';
import { IndicatorService } from '../indicator.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-silos',
  templateUrl: './silos.component.html',
  styleUrls: ['./silos.component.css']
})
export class SilosComponent implements OnInit {
  indicators: Indicator[];
  private alive: boolean;

  constructor(
    private indicatorService: IndicatorService,
    public messageService: MessageService) {
  };

  ngOnInit() {
  	this.getIndicators();
  };
  
  getIndicators():void{
    const time = interval(1000);
    time.subscribe(_ => {
          this.indicatorService.getIndicators()
              .subscribe(indicators => this.indicators = indicators);}
      );
  }

}
